import {
  ActionIcon,
  Box,
  Group,
  Image,
  AppShell,
  Title,
  NavLink,
} from "@mantine/core";
import { MouseEventHandler } from "react";
import { FaChevronLeft } from "react-icons/fa";
import classes from "./AppNavBar.module.css";
import { HashLink } from "react-router-hash-link";
import cx from "clsx";

export interface AppNavBar {
  /** Table of Contents is Open */
  tocIsOpen?: boolean;
  /** User is Logged */
  onClose?:
    | MouseEventHandler<HTMLButtonElement>
    | MouseEventHandler<HTMLAnchorElement>;
}

const LINKS = [
  { label: "About", url: "/#About" },
  { label: "Tutorials", url: "/#Tutorials" },
  { label: "Downloads", url: "/downloads" },
];

const AppNavBar = ({ onClose }: AppNavBar) => {
  return (
    <AppShell.Navbar p="xs">
      <AppShell.Section>
        <Box className={classes.wrap}>
          <Group justify="apart">
            <Group>
              <Image
                maw={"2.5rem"}
                mx="auto"
                radius="md"
                src="svg/logo/rockplot_logo_black.svg"
                alt="RockPlot"
              />
              <Title>RockPlot</Title>
            </Group>

            <ActionIcon
              variant="transparent"
              onClick={onClose as MouseEventHandler<HTMLButtonElement>}
              size={30}
              className={classes.button}
            >
              <FaChevronLeft />
            </ActionIcon>
          </Group>
        </Box>
      </AppShell.Section>
      {LINKS.map((item) => {
        return (
          <HashLink
            key={item.label}
            to={item.url}
            onClick={onClose as MouseEventHandler<HTMLAnchorElement>}
            className={cx(NavLink.classes.root, NavLink.classes.label)}
          >
            {item.label}
          </HashLink>
        );
      })}
    </AppShell.Navbar>
  );
};

export default AppNavBar;
