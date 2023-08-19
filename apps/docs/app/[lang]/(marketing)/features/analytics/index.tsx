import { RadioTower } from "lucide-react";
import { Badge, Button, Label } from "ui";
import { Alert, AlertDescription, AlertTitle } from "ui/components/alert";
import { Status } from "./status";
import { Code } from "ui/typography";

async function getStats(user) {
  const data = await fetch(
    `${process.env.UMAMI_URI}/api/websites/${process.env.UMAMI_ID}/active`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    }
  );

  const stats = await data.json();

  return stats[0];
}

async function getButtonStats(user) {
  var start = new Date();
  var end = new Date();

  const data = await fetch(
    `${process.env.UMAMI_URI}/api/websites/${
      process.env.UMAMI_ID
    }/events?startAt=${start.setUTCHours(0, 0, 0, 0)}&endAt=${end.setUTCHours(
      23,
      59,
      59,
      999
    )}&unit=month&timezone=Europe%2FParis`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      next: { tags: ["analytics"] },
    }
  );

  const stats = await data.json();

  return stats;
}

async function getUser() {
  const login = await fetch(`${process.env.UMAMI_URI}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: process.env.UMAMI_USERNAME,
      password: process.env.UMAMI_PASSWORD,
    }),
    next: { tags: ["analytics"] },
  });

  const user = login.json();
  return user;
}

export async function Analytics() {
  const user = await getUser();
  const data = await getStats(user);
  const buttonData = await getButtonStats(user);

  const clickCount = buttonData.find((data) => data.x === "analytics")?.y ?? 0;

  return (
    <div className="flex  flex-col w-full h-full lg:h-full items-stretch justify-between">
      <div />
      <Label className="flex w-full justify-center items-center text-center text-md text-muted-foreground">
        <RadioTower className="mr-2" />
        Bezoekers
        <Badge className="ml-2">{data?.x > 0 ? data?.x : 1}</Badge>
      </Label>
      <div className="w-full items-center justify-end mt-4 flex space-x-2">
        <span className="text-xs">
          Darkmode staat: <Code>uit</Code>
        </span>
        <Status>Clicks ({clickCount})</Status>
      </div>
    </div>
  );
}
