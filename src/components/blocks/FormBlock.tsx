"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { sendMailerliteContact } from "@/app/actions/actions";
import { Check } from "lucide-react";
import { Textarea } from "../ui/textarea";

export type CustomID = {
  customID?: string;
};

export const FormBlock = ({ customID = "" }: CustomID) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const extra = formData.get("extra") as string;
    sendMailerliteContact({ name, phone, email, extra });
  };
  return (
    <section className=" bg-neutral-200" id={customID}>
      <div className="section-padding-large max-w-md mx-auto flex flex-col gap-6 lg:max-w-xl">
        <div className="flex flex-col gap-2 text-center">
          <h2>Reach out to Get Started</h2>
          <div className="flex flex-col gap-1 items-center">
            <div className="flex items-center gap-1">
              <Check size={16} className="text-muted-foreground" />
              <p>Discuss your needs and goals</p>
            </div>
            <div className="flex items-center gap-1">
              <Check size={16} className="text-muted-foreground" />
              <p>Learn how exercise can help</p>
            </div>
            <div className="flex items-center gap-1">
              <Check size={16} className="text-muted-foreground" />
              <p>How to get started with us</p>
            </div>
          </div>
        </div>
        <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium tracking-tight">Name</label>
            <Input
              type="text"
              className=""
              name="name"
              placeholder="Hey! What's your name?"
            />
          </div>
          <div>
            <label className="text-sm font-medium tracking-tight" htmlFor="">
              Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="What's your best email?"
            />
          </div>
          <div>
            <label className="text-sm font-medium tracking-tight" htmlFor="">
              Conact Number
            </label>
            <Input
              type="tel"
              name="phone"
              placeholder="What's your best phone number?"
            />
          </div>
          <div>
            <label className="text-sm font-medium tracking-tight" htmlFor="">
              Let us know anything
            </label>
            <Textarea
              name="extra"
              placeholder="Let us know anything about your needs and goals"
            />
          </div>
          <Button type="submit" variant="default">
            Enquire Now
          </Button>
        </form>
      </div>
    </section>
  );
};
