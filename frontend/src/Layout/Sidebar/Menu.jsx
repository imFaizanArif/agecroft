export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      { path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: "home", title: "Dashboard", type: "link" },
      { path: `${process.env.PUBLIC_URL}/app/links`, icon: "button", title: "Links", type: "link" },
      { path: `${process.env.PUBLIC_URL}/app/loans`, icon: "learning", title: "Loans", type: "link" },
      { path: `${process.env.PUBLIC_URL}/app/payment-activity`, icon: "blog", title: "Payments", type: "link" },
      { path: `${process.env.PUBLIC_URL}/app/reports`, icon: "knowledgebase", title: "Reports", type: "link" },
    ],
  },
];
