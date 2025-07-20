import { socialItem } from "@/data/Social";
import Link from "next/link";
import React, { ReactNode } from "react";

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socialItem.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link key={index} href={item.href} className={iconStyles}>
            <Icon className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
