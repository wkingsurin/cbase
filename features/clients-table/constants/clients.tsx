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
    filter: { type: "checkbox", options: [{ label: "null", value: "null" }] },
  },
  {
    id: "tg",
    header: "Tg",
    accessorKey: "tg",
    initialWidth: 140,
    minWidth: 140,
    maxWidth: 300,
    copyable: true,
    filter: { type: "checkbox", options: [{ label: "null", value: "null" }] },
  },
  {
    id: "vk",
    header: "Vk",
    accessorKey: "vk",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    copyable: true,
    filter: { type: "checkbox", options: [{ label: "null", value: "null" }] },
  },
  {
    id: "site",
    header: "Site",
    accessorKey: "site",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    copyable: true,
    filter: { type: "checkbox", options: [{ label: "null", value: "null" }] },
  },
  {
    id: "phone",
    header: "Phone",
    accessorKey: "phone",
    initialWidth: 140,
    minWidth: 140,
    maxWidth: 300,
    copyable: true,
    filter: { type: "checkbox", options: [{ label: "null", value: "null" }] },
  },
  {
    id: "comment",
    header: "Comment",
    accessorKey: "comment",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    copyable: true,
    filter: { type: "checkbox", options: [{ label: "null", value: "null" }] },
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

    filter: {
      type: "checkbox",
      options: [
        { label: "In work", value: "IN_WORK" },
        { label: "Await", value: "AWAIT" },
        { label: "Closed", value: "CLOSED" },
        { label: "In payment", value: "IN_PAYMENT" },
      ],
    },
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

    filter: {
      type: "checkbox",
      options: [
        { label: "Positive", value: "POSITIVE" },
        { label: "Neutral", value: "NEUTRAL" },
        { label: "Negative", value: "NEGATIVE" },
        { label: "Ignor", value: "IGNOR" },
      ],
    },
  },
  {
    id: "createdAt",
    header: "CreatedAt",
    accessorKey: "createdAt",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    copyable: true,
    filter: { type: "text" },
  },
  {
    id: "updatedAt",
    header: "UpdatedAt",
    accessorKey: "updatedAt",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    copyable: true,
    filter: { type: "text" },
  },
];
