// import { columns, Activity } from "@/app/features/activity-log-table/columns";
// import { DataTable } from "@/app/features/activity-log-table/data-table";

// async function getData(): Promise<Activity[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "1",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "2",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "3",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "4",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "5",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "6",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "7",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "8",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "9",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "10",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "11",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "12",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "13",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "14",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "15",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "16",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "17",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "18",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "19",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "20",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "21",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "22",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "23",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "24",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "25",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "26",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "27",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "28",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "29",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "30",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "31",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "32",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "33",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "34",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "35",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//     {
//       id: "36",
//       takenBy: {
//         name: "John Doe",
//         avatar: "/vercel-user.png",
//         initials: "JD",
//       },
//       action: "Created",
//       details: "Created a new reseller account",
//       time: "2m ago",
//     },
//   ];
// }

// export default async function ResellerLogPage() {
//   const data = await getData();

//   return (
//     <div className="container mx-auto">
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }
