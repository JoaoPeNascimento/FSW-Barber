import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const QuickSearchButton = (props: { imageUrl: string; title: string }) => {
  return (
    <Button variant="secondary" asChild>
      <Link href={`/barbershops?search=${props.title}`}>
        <Image
          src={props.imageUrl}
          alt={props.title}
          width={16}
          height={16}
          className="ml-2"
        />
        <p className="mr-2">{props.title}</p>
      </Link>
    </Button>
  );
};
export default QuickSearchButton;
