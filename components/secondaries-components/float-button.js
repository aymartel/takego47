import Link from "next/link";
import Image from "next/image";

const FloatingButton = () => {
  return (
    <Link href="#home" >
      <a className="floating_button" id="floatButton">

      <i className="fas fa-arrow-up"></i>
      </a>
      
    </Link>
  );
};
export default FloatingButton;
