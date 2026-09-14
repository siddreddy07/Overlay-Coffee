export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface CafeInfo {
  name: string;
  subname: string;
  city: string;
  address: string;
  postcode: string;
  hoursWeekday: string;
  hoursWeekend: string;
  tagline: string;
  instagramHandle: string;
}
