import { DataTableColumn } from "@/components/data-table/types";
import { IClient } from "../types";
import StatusCell from "../components/status-cell";
import TagCell from "../components/tag-cell";

export const CLIENTS_DATA: IClient[] = [
  {
    id: "1",
    fullname: "Никита Ишутин",
    tg: "@n_Ishutin",
    vk: null,
    site: null,
    phone: "+7 951 553 3418",
    comment: "Replace content in strapi admin",
    status: "IN_WORK",
    tag: "POSITIVE",
    createdAt: null,
    updatedAt: null,
  },
  {
    id: "2",
    fullname: "Кирилл Сергеевич",
    tg: "@TonnyKartezza",
    vk: null,
    site: null,
    phone: null,
    comment: null,
    status: "AWAIT",
    tag: "NEUTRAL",
    createdAt: null,
    updatedAt: null,
  },
  {
    id: "3",
    fullname: "Дима Упит",
    tg: "@Dzimitry1",
    vk: null,
    site: null,
    phone: null,
    comment: null,
    status: "CLOSED",
    tag: "NEGATIVE",
    createdAt: null,
    updatedAt: null,
  },
  {
    id: "4",
    fullname: "Dmitrii Shatunov",
    tg: "@vtmnts666",
    vk: null,
    site: null,
    phone: null,
    comment: null,
    status: "CLOSED",
    tag: "IGNOR",
    createdAt: null,
    updatedAt: null,
  },
  {
    id: "5",
    fullname: "Dmitrii Shatunov",
    tg: "@vtmnts666",
    vk: null,
    site: null,
    phone: null,
    comment: null,
    status: "IN_PAYMENT",
    tag: "POSITIVE",
    createdAt: null,
    updatedAt: null,
  },
];

export const CLIENT_COLUMNS: DataTableColumn<IClient>[] = [
  {
    id: "all",
    header: "All",
    initialWidth: 90,
    minWidth: 90,
    maxWidth: 160,
  },
  {
    id: "id",
    header: "Id",
    accessorKey: "id",
    initialWidth: 90,
    minWidth: 90,
    maxWidth: 160,
    copyable: true,
  },
  {
    id: "fullname",
    header: "Fullname",
    accessorKey: "fullname",
    initialWidth: 160,
    minWidth: 160,
    maxWidth: 300,
    copyable: true,
  },
  {
    id: "tg",
    header: "Tg",
    accessorKey: "tg",
    initialWidth: 140,
    minWidth: 140,
    maxWidth: 300,
    copyable: true,
  },
  {
    id: "vk",
    header: "Vk",
    accessorKey: "vk",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    copyable: true,
  },
  {
    id: "site",
    header: "Site",
    accessorKey: "site",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    copyable: true,
  },
  {
    id: "phone",
    header: "Phone",
    accessorKey: "phone",
    initialWidth: 140,
    minWidth: 140,
    maxWidth: 300,
    copyable: true,
  },
  {
    id: "comment",
    header: "Comment",
    accessorKey: "comment",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    copyable: true,
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    initialWidth: 120,
    minWidth: 90,
    maxWidth: 300,
    render: (client) => (
      <StatusCell
        status={client.status}
        onChange={(status) => {
          console.log("Client:", client.id, "New status:", status);
        }}
      />
    ),
  },
  {
    id: "tag",
    header: "Tag",
    accessorKey: "tag",
    initialWidth: 120,
    minWidth: 90,
    maxWidth: 300,
    render: (client) => (
      <TagCell
        tag={client.tag}
        onChange={(tag) => {
          console.log("Client:", client.id, "New tag:", tag);
        }}
      />
    ),
  },
  {
    id: "createdAt",
    header: "CreatedAt",
    accessorKey: "createdAt",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    copyable: true,
  },
  {
    id: "updatedAt",
    header: "UpdatedAt",
    accessorKey: "updatedAt",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    copyable: true,
  },
];
