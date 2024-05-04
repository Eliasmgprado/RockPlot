import { Container, Grid, Image, List, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@mantine/hooks";

const Intro = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const matches = useMediaQuery("(min-width: 48em)");

  // console.log(autoplay.current);

  const images = [
    "png/screenshots/1_tableView.png",
    "png/screenshots/2_graph_countour.png",
    "png/screenshots/3_graph_colour.png",
  ];

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Container
      id="About"
      py={!matches ? "2rem" : "8rem"}
      style={{ borderBottom: "1px solid rgba(34,36,38,.15)" }}
      fluid
    >
      <Container size="lg">
        <Grid gutter={{ base: 0, sm: "sm" }}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Title order={1} fw={700} mb="sm">
              Easy-to-use Smart Geochemical Web Application
            </Title>
            <Text size="xl" mb="sm">
              RockPlot is a application developed by researcher from the Centre
              of Applied Geociences (CGA) of the Geological Survey of Brazil
              (SGB) for the evaluation and interpretation of whole rock
              geochemical data. In addition to providing the classic univariate
              and multivariate statistical analysis tools, the app also makes it
              easy to use modern machine learning algorithms for geochemical
              data analysis. RockPlot includes the most used plots for chemical
              and geotectonic classification of igneous rocks.
            </Text>
            <Title order={5} mb="sm">
              Main Features:
            </Title>
            <List size="lg">
              <List.Item>Intuitive and modern user interface</List.Item>
              <List.Item>Easy upload and management of data</List.Item>
              <List.Item>
                Publication quality plots which can be exported as vector
                graphics
              </List.Item>
              <List.Item>
                Data analysis with modern machine learning algorithms
              </List.Item>
            </List>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, sm: 6 }}
            style={{ alignSelf: "center" }}
            px={!matches ? 0 : "md"}
            pt={!matches ? "md" : 0}
          >
            <Carousel
              slideSize={{ base: "100%" }}
              height={300}
              slideGap={{ base: 0 }}
              withControls={true}
              withIndicators
              plugins={[autoplay.current]}
              loop
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              {slides}
            </Carousel>
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};

export default Intro;
