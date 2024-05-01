import {
  Image,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Center,
  Text,
  ThemeIcon,
  ActionIcon,
  Popover,
} from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { MdOutlineInfo } from "react-icons/md";
import HomeHeader from "../Layout/HomeHeader";
import { useShellCtx } from "../Layout/Shell";
import AppFooter from "../Layout/AppFooter";
import { FaWindows } from "react-icons/fa";
import ReactGA from "react-ga";

interface Releases {
  body: string;
  published_at: string;
  updated_at: string;
  tag_name: string;
  name: string;
  browser_download_url: string;
  content_type: string;
  download_count: number;
  size: number;
}

const DownloadPage = () => {
  const [latest, setLatest] = useState<Releases>();
  const { tocToggleHandler } = useShellCtx();

  useEffect(() => {
    fetch("https://api.github.com/repos/eliasmgprado/rockplot/releases/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const { body, published_at, tag_name, name, assets } = data;

        const {
          browser_download_url,
          content_type,
          download_count,
          size,
          updated_at,
        } = assets?.[0] ?? {
          browser_download_url: "",
          content_type: "",
          download_count: "",
          size: "",
          updated_at: "",
        };

        const latest_data = {
          body,
          published_at,
          updated_at,
          tag_name,
          name,
          browser_download_url,
          content_type,
          download_count,
          size,
        };

        setLatest(latest_data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClick = useCallback(() => {
    ReactGA.event({
      category: "Button Click",
      action: "Clicked on Download Latest",
      label: "Download Latest",
    });
  }, []);

  return (
    <Stack align="stretch" gap={0} mih="100vh" w="100vw">
      <Container
        w="100%"
        pb="xl"
        style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Stack style={{ flexGrow: 1 }} gap={0}>
          <HomeHeader
            tocClick={tocToggleHandler}
            variant={"default"}
            w="100%"
          />
          <Center mt="md" h="100%" style={{ flexGrow: 1 }}>
            {latest && (
              <Grid>
                <Grid.Col span={6} px="lg">
                  <Image
                    src="svg/logo/rockplot_logo_HQ.svg"
                    maw="400px"
                    mx="auto"
                  />
                </Grid.Col>
                <Grid.Col span={6} ta="center">
                  <Stack gap={0} h="100%">
                    <Stack gap={0} style={{ flexGrow: 1 }} justify="center">
                      {/* <Title
                        order={1}
                        mb="lg"
                        ta="center"
                      >{`RockPlot ${latest.tag_name}`}</Title> */}
                      <Button
                        component="a"
                        color="black"
                        leftSection={<FaWindows size={"2rem"} />}
                        size="lg"
                        href={latest?.browser_download_url}
                        variant="outline"
                        fullWidth
                        onClick={handleClick}
                      >
                        {`Download RockPlot ${latest.tag_name}`}
                      </Button>
                      <Group justify="center" mt="xs">
                        <Text fw={500}>Windows</Text>

                        <ThemeIcon color="gray" size={6} radius="xl">
                          {""}
                        </ThemeIcon>
                        <Text fw={500}>Installer</Text>
                        <ThemeIcon color="gray" size={6} radius="xl">
                          {""}
                        </ThemeIcon>
                        <Text fw={500}>
                          {(latest.size / (1024 * 1024)).toFixed(2) + " MB"}
                        </Text>
                        <ThemeIcon color="gray" size={6} radius="xl">
                          {""}
                        </ThemeIcon>
                        <Popover
                          width={350}
                          position="bottom"
                          withArrow
                          shadow="md"
                        >
                          <Popover.Target>
                            <ActionIcon variant="transparent" c="gray">
                              <MdOutlineInfo />
                            </ActionIcon>
                          </Popover.Target>
                          <Popover.Dropdown>
                            <Text size="md" ta="center">
                              Compatible with Windows 11, 10, and 8.1
                            </Text>
                            <Text size="xs" c="dimmed" ta="center">
                              {`Released on ${latest.published_at}`}
                            </Text>
                          </Popover.Dropdown>
                        </Popover>
                      </Group>

                      <Text mt="sm" c="dimmed">
                        {"Looking for a "}
                        <Button component="a" href="#/releases" unstyled>
                          previous version
                        </Button>
                        ?
                      </Text>
                    </Stack>
                  </Stack>
                </Grid.Col>
              </Grid>
            )}
          </Center>
        </Stack>
      </Container>
      <AppFooter w="100%" />
    </Stack>
  );
};

export default DownloadPage;
