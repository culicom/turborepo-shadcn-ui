import { RadioTower } from "lucide-react";
import { Badge, Label } from "ui";
import { Alert, AlertDescription, AlertTitle } from "ui/components/alert";

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
  });

  const user = login.json();
  return user;
}

export async function Analytics() {
  const user = await getUser();
  const data = await getStats(user);
  return (
    <div className=" min-h-[12rem] flex-col flex justify-center items-center">
      <Label className="flex w-full justify-center items-center text-center text-md text-muted-foreground">
        <RadioTower className="mr-2" />
        <Badge className="mr-2">{data?.x}</Badge>
        {data?.x === 1 ? `Alleen jij bent hier` : `mensen online`}
      </Label>
      <div className="w-full justify-end mt-4 flex space-x-2"></div>
    </div>
  );
}
