export type ClientTag = "POSITIVE" | "NEUTRAL" | "NEGATIVE" | "IGNOR";

export const CLIENT_TAGS: Record<
  ClientTag,
  {
    label: string;
    className: string;
    dotClassName: string;
  }
> = {
  POSITIVE: {
    label: "Positive",
    className: "bg-green/10 text-green",
    dotClassName: "bg-green",
  },
  NEUTRAL: {
    label: "Neutral",
    className: "bg-orange/10 text-orange",
    dotClassName: "bg-orange",
  },
  NEGATIVE: {
    label: "Negative",
    className: "bg-red/10 text-red",
    dotClassName: "bg-red",
  },
  IGNOR: {
    label: "Ignor",
    className: "bg-white/10 text-white/50",
    dotClassName: "bg-white/50",
  },
};
