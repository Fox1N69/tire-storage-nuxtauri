export interface IMenuItems {
  name: string,
  url: string,
  icon: string
}

export const MENU_DATA: IMenuItems[] = [
  {
    icon:"line-md:account",
    name: "Клиенты",
    url: "/tableuser", 
  },
  {
    icon:"line-md:clipboard-arrow",
    name: "Заявки",
    url: "/tablerequest", 
  },
]