import HomeContainer from "@/page-container/home";
import { NextPage } from "next";

// Need to keep this page server side incase if we need to use meta data as the project scale goes high
const page: NextPage = () => {
  return <HomeContainer />;
};

export default page;
