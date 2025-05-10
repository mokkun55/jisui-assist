"use client";

import { useRouter } from "next/navigation";
import { BaseButton } from "../baseButton";

type Props = {
  label: string;
  disabled?: boolean;
  url: string | "back";
  className?: string;
};

export const LinkButton = ({ label, disabled, url, className }: Props) => {
  const router = useRouter();
  return (
    <BaseButton
      label={label}
      disabled={disabled}
      onClick={() => {
        if (url === "back") {
          router.back();
        } else {
          router.push(url);
        }
      }}
      className={className}
    />
  );
};
