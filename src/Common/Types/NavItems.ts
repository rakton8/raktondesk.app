export type PageTypes = "Articles" | "Collection" | "Dashboard";

export type NavItem = {
  name: PageTypes;
  displayName: string;
  path: string;
};
