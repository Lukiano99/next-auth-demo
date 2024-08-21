import Image from "next/image";
import logo from "@/assets/logo-icon.svg";
const Logo = () => {
  return <Image src={logo} width={42} height={42} alt="logo" />;
};

export default Logo;
