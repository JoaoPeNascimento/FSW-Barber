import Image from "next/image";
import { Button } from "./ui/button";

const QuickSearchButton = (props: { imageUrl: string; title: string }) => {
  return (
    <Button variant="secondary">
      <Image src={props.imageUrl} alt={props.title} width={16} height={16} />
      {props.title}
    </Button>
  );
};
export default QuickSearchButton;
