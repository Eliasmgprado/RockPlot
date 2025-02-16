import {
  ActionIcon,
  Center,
  Container,
  ContainerProps,
  Group,
  Text,
} from "@mantine/core";
import { FaLinkedin } from "react-icons/fa";
import classes from "./AppFooter.module.css";

export interface AppFooterProps extends ContainerProps {
  /** App components */
  simple?: boolean;
}

const AppFooter = ({ simple, ...props }: AppFooterProps) => {
  return (
    <Container pt="1.5rem" className={classes.container} fluid {...props}>
      <Container size="lg">
        <Center>
          <Group pb="sm" gap={0} justify="center">
            <Group gap={0} justify="center">
              <Text
                // style={{ borderRight: "1px solid grey" }}
                // px="xs"
                ta="center"
              >
                © 2020-2025 RockPlot
              </Text>
              <Text
                style={{ borderRight: "1px solid grey" }}
                px="xs"
                ta="center"
              >
                by Elias Martins Guerra Prado
              </Text>
            </Group>

            <ActionIcon
              variant="transparent"
              component="a"
              href="https://www.linkedin.com/in/eliasmgprado/"
              color="var(--linkedin-blue)"
            >
              <FaLinkedin size="1rem" />
            </ActionIcon>
          </Group>
        </Center>
      </Container>
    </Container>
  );
};

export default AppFooter;
