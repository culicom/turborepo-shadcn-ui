// "use server";

// import { revalidateTag } from "next/cache";

// export async function addItem() {
//   async function getButtonStats(user) {
//     var start = new Date();
//     var end = new Date();

//     const data = await fetch(
//       `${process.env.UMAMI_URI}/api/websites/${
//         process.env.UMAMI_ID
//       }/events?startAt=${start.setUTCHours(0, 0, 0, 0)}&endAt=${end.setUTCHours(
//         23,
//         59,
//         59,
//         999
//       )}&unit=day&timezone=Europe%2FParis`,
//       {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//           "Content-Type": "application/json",
//         },
//         next: { tags: ["analytics"] },
//       }
//     );

//     const stats = await data.json();

//     return stats;
//   }

//   async function getUser() {
//     const login = await fetch(`${process.env.UMAMI_URI}/api/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: process.env.UMAMI_USERNAME,
//         password: process.env.UMAMI_PASSWORD,
//       }),
//     });

//     const user = login.json();
//     return user;
//   }

//   const user = await getUser();
//   const buttonData = await getButtonStats(user);

//   revalidateTag("analytics");

//   return buttonData;
// }
