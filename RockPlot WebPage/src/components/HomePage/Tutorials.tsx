import {
  Anchor,
  AspectRatio,
  Box,
  // Container,
  Grid,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useState } from "react";

const TUTORIAL_IDS = [
  {
    label: "Loading data",
    id: "n_hjkwHoQGE",
  },
  {
    label: "Data visualization",
    id: "zxkcMM7e-U8",
  },
  {
    label: "Creating sample groups",
    id: "OaFIypdL7bo",
  },
  {
    label: "Creating Diagrams",
    id: "WQFFwaxuPpg",
  },
];

const Tutorials = () => {
  const [tutorial, setTutorial] = useState(TUTORIAL_IDS[0]);

  return (
    <Box id="Tutorials" py="1rem">
      <Box w="70vw" mx="auto" maw="1080px" mah="400px">
        <Grid px={"2rem"} gutter={0}>
          <Grid.Col span={4} pr={"1rem"}>
            <Title order={1} fw={700} mb="sm">
              Tutorials
            </Title>
            <Text size="xl" mb="sm">
              To learn how to use RockPlot see our tutorial videos.
            </Text>
            <List
              withPadding
              size="lg"
              color="white"
              center={true}
              icon={
                <ThemeIcon color="blue" size={8} radius="xl" mb={3}>
                  {""}
                </ThemeIcon>
              }
            >
              {TUTORIAL_IDS.map((item) => {
                return (
                  <List.Item key={item.id}>
                    <Anchor
                      p={0}
                      component="a"
                      // href="#Tutorials"
                      onClick={() => {
                        setTutorial(item);
                      }}
                    >
                      {item.label}
                    </Anchor>
                  </List.Item>
                );
              })}
            </List>
          </Grid.Col>
          <Grid.Col span={8}>
            <AspectRatio ratio={16 / 9} maw="700px">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${tutorial.id}?controls=1&autohide=true&autoplay=auto&color=%23444444&hq=true&jsapi=false&modestbranding=true`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};

export default Tutorials;
