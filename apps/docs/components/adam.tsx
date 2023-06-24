import Image from "next/image";

import AdamToren from "./../public/adam.jpg";

export function Adam() {
  return (
    <div className="h-92 overflow-hidden  md:px-0">
      <Image className="object-cover" alt="amsterdam" src={AdamToren} />
    </div>
  );
}
