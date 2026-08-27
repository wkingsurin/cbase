export type ClientStatus = "IN_WORK" | "AWAIT" | "CLOSED" | "IN_PAYMENT";

export const CLIENT_STATUSES: Record<
  ClientStatus,
  {
    label: string;
    className: string;
    dotClassName: string;
  }
> = {
  IN_WORK: {
    label: "In work",
    className: "bg-green/10 text-green",
    dotClassName: "bg-green",
  },
  AWAIT: {
    label: "Await",
    className: "bg-orange/10 text-orange",
    dotClassName: "bg-orange",
  },
  CLOSED: {
    label: "Closed",
    className: "bg-red/10 text-red",
    dotClassName: "bg-red",
  },
  IN_PAYMENT: {
    label: "In payment",
    className: "bg-purple/10 text-purple",
    dotClassName: "bg-purple",
  },
};
