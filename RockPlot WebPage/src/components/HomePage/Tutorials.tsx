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
import { useMediaQuery } from "@mantine/hooks";
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
  const matches = useMediaQuery("(min-width: 48em)");

  return (
    <Box id="Tutorials" py="1rem">
      <Box
        w={matches ? "70vw" : "85vw"}
        mx="auto"
        maw="1080px"
        mah={matches ? "400px" : "600px"}
      >
        <Grid px={matches ? "2rem" : 0} gutter={0}>
          <Grid.Col
            span={{ base: 12, sm: 4 }}
            pr={matches ? "1rem" : 0}
            mb={matches ? 0 : "md"}
          >
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
          <Grid.Col span={{ base: 12, sm: 8 }}>
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
