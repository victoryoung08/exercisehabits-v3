"use client";
import Link from "next/link";
import { Button } from "./button";

export type AnchorButtonType = {
  text: string;
};

const goToAnchor = () => {
  document.getElementById("mainForm")?.scrollIntoView({ behavior: "smooth" });
  console.log(document.getElementById("mainForm"));
  console.log("clicked");
};

export default function AnchorButton({ text }: AnchorButtonType) {
  return <Button onClick={goToAnchor}>{text}</Button>;
}
