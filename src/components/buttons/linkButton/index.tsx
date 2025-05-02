"use client";

import { useRouter } from "next/navigation";
import { BaseButton } from "../baseButton";

type Props = {
  label: string;
  disabled?: boolean;
  url: string;
};

export const LinkButton = ({ label, disabled, url }: Props) => {
  const router = useRouter();
  return (
    <BaseButton
      label={label}
      disabled={disabled}
      onClick={() => router.push(url)}
    />
  );
};
