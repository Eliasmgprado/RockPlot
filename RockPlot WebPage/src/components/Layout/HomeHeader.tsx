import {
  Box,
  Burger,
  Button,
  Container,
  ContainerProps,
  Group,
  Image,
} from "@mantine/core";
import { MouseEventHandler } from "react";
import classes from "./HomeHeader.module.css";
import cx from "clsx";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export interface TopNavigationProps extends ContainerProps {
  /** Table of Contents Button Click */
  tocIsOpen?: boolean;
  /** Table of Contents Button Click */
  tocClick?: MouseEventHandler<HTMLButtonElement>;
  /** Controls header appearance */
  variant?: "default" | "transparent" | "dark";
  /** User is Logged*/
  isLogged?: boolean;
}

const HomeHeader = ({
  tocIsOpen,
  tocClick,
  variant,
  ...props
}: TopNavigationProps) => {
  const navigate = useNavigate();
  return (
    <Container
      id="Index"
      className={classes.root}
      size="lg"
      h={"60px"}
      pos={"relative"}
      variant={variant}
      {...props}
    >
      <Group justify="space-between" h="100%">
        <Group justify="left" align="center">
          <Burger
            className={classes.tocButton}
            opened={tocIsOpen}
            onClick={tocClick}
            hiddenFrom="sm"
            color="white"
            size="sm"
          />
          <Group
            justify="left"
            align="stretch"
            gap={0}
            pos="relative"
            className={classes["hide-sm"]}
          >
            <Box component="a" href="#/">
              <Image
                maw={"50px"}
                mx="auto"
                py="5px"
                radius="md"
                src={
                  ["transparent", "dark"].includes(variant ?? "")
                    ? "svg/logo/rockplot_logo_grey.svg"
                    : "svg/logo/rockplot_logo_black.svg"
                }
                alt="RockPlot"
              />
            </Box>
            <Button
              component={HashLink}
              variant="subtle"
              classNames={{
                root: cx(classes.linkButton, {
                  [classes.transparent]: variant === "transparent",
                }),
              }}
              to="/#About"
            >
              About
            </Button>
            <Button
              component={HashLink}
              variant="subtle"
              classNames={{
                root: cx(classes.linkButton, {
                  [classes.transparent]: variant === "transparent",
                }),
              }}
              to="/#Tutorials"
            >
              Tutorials
            </Button>
            <Button
              component="a"
              variant="subtle"
              classNames={{
                root: cx(classes.linkButton, {
                  [classes.transparent]: variant === "transparent",
                }),
              }}
              onClick={() => {
                navigate("/downloads", { replace: true });
              }}
            >
              Downloads
            </Button>
          </Group>
        </Group>
      </Group>
    </Container>
  );
};

export default HomeHeader;
