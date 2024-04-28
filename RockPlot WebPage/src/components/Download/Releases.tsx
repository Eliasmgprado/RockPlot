import {
  ActionIcon,
  Badge,
  Card,
  Container,
  Group,
  Stack,
  Title,
  Tooltip,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import HomeHeader from "../Layout/HomeHeader";
import { useShellCtx } from "../Layout/Shell";
import AppFooter from "../Layout/AppFooter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useSearchParams } from "react-router-dom";

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

const Releases = () => {
  const [releases, setReleases] = useState<Releases[]>([]);
  const { tocToggleHandler } = useShellCtx();
  let [searchParams] = useSearchParams();
  const withStats = searchParams.get("stats");

  useEffect(() => {
    fetch("https://api.github.com/repos/eliasmgprado/rockplot/releases")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const releases_data = data.map((item: any) => {
          const { body, published_at, tag_name, name, assets } = item;

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

          return {
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
        });

        setReleases(releases_data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Stack align="stretch" gap={0} mih="100vh" w="100vw">
      <Container w="100%" pb="xl" style={{ flexGrow: 1 }}>
        <HomeHeader tocClick={tocToggleHandler} variant={"default"} />
        <Stack mt="md">
          <Title>All releases</Title>
          {releases.map((release) => {
            return (
              <Card key={release.tag_name}>
                <Group justify="space-between" w="100%" mb="md">
                  <Group>
                    <Badge color="blue">{release.tag_name}</Badge>
                    <Title order={3}>{release.name}</Title>
                  </Group>
                  <Group>
                    {withStats && (
                      <Badge
                        leftSection={<MdOutlineFileDownload size="1rem" />}
                        color="gray"
                      >
                        {release.download_count}
                      </Badge>
                    )}
                    <Tooltip label="Dowload" withArrow>
                      <ActionIcon
                        variant="default"
                        component="a"
                        href={release.browser_download_url}
                        color="gray"
                        aria-label={`download-${release.tag_name}`}
                      >
                        <MdOutlineFileDownload />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Group>
                <Title order={4} mb="sm">
                  Release Notes
                </Title>
                <Markdown remarkPlugins={[remarkGfm]}>{release.body}</Markdown>
              </Card>
            );
          })}
        </Stack>
      </Container>
      <AppFooter w="100%" />
    </Stack>
  );
};

export default Releases;
