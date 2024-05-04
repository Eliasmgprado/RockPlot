import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Container, Image, Title } from "@mantine/core";
import classes from "./TopNavigation.module.css";

import HomeHeader from "./HomeHeader";
import { MdOutlineFileDownload } from "react-icons/md";
import { useMediaQuery } from "@mantine/hooks";

export interface TopNavigationProps {
  /** Table of Contents Button Click */
  tocClick?: MouseEventHandler<HTMLButtonElement>;
}

const TopNavigation = ({ tocClick }: TopNavigationProps) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <Container fluid py="1em" className={classes.container}>
        <HomeHeader tocClick={tocClick} variant={"transparent"} />
        <Container size="lg" mih={"2.85rem"}>
          <Image
            mx="auto"
            src={
              !matches
                ? "svg/logo/rockplot_logo_HQ.svg"
                : "svg/logo/rockplot_grey.svg"
            }
            alt="RockPlot"
            classNames={{ root: classes.image }}
          />
          <Title
            order={1}
            c="#ffffffe6"
            fw={400}
            ta="center"
            size={!matches ? "2rem" : "3rem"}
            my="1rem"
          >
            Smart Geochemistry
          </Title>
          <Center mt={"2rem"} mb={"2rem"}>
            <Button
              color="blue"
              rightSection={<MdOutlineFileDownload size={"2rem"} />}
              size="lg"
              classNames={{ label: classes.buttonlabel }}
              onClick={() => {
                navigate("/downloads", { replace: true });
              }}
            >
              Download RockPlot
            </Button>
          </Center>
        </Container>
      </Container>
    </>
  );
};

export default TopNavigation;
