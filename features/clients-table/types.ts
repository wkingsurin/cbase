import { ClientStatus } from "./constants/status";
import { ClientTag } from "./constants/tag";

export interface IClient {
  id: string;
  fullname: string;
  tg: string | null;
  vk: string | null;
  site: string | null;
  phone: string | null;
  comment: string | null;
  status: ClientStatus;
  tag: ClientTag;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface ImportClient {
  fullname: string;
  tg: string;
  vk: string;
  site: string;
  phone: string;
  comment: string;
}