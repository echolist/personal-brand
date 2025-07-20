import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ContactButton = () => {
  return (
    <Link href={"/contact"}>
      <Button>Contact me</Button>
    </Link>
  );
};

export default ContactButton;
