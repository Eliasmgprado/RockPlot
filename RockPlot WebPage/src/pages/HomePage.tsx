import TopNavigation from "../components/Layout/TopNavigation";
import AppFooter from "../components/Layout/AppFooter";
import Intro from "../components/HomePage/Intro";
import Tutorials from "../components/HomePage/Tutorials";
import Development from "../components/HomePage/Development";
import { useShellCtx } from "../components/Layout/Shell";
import { Button, Center, Container, Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const HomePage = () => {
  const { tocToggleHandler } = useShellCtx();
  const matches = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <TopNavigation tocClick={tocToggleHandler} />
      <Intro />
      <Tutorials />
      <Development />
      <Container
        py="1rem"
        style={{ borderBottom: "1px solid rgba(34,36,38,.15)" }}
        fluid
      >
        <Container size="lg">
          <Center>
            <Group justify="center" w="100%" gap="4rem">
              <Button component="a" href="https://www.sgb.gov.br/en/" unstyled>
                <Image src="png/cga_logo.png" h={100} />
              </Button>
              <Button component="a" href="https://www.sgb.gov.br/en/" unstyled>
                <Image
                  src="png/sgb_logo.png"
                  h={100}
                  maw={!matches ? "100%" : undefined}
                  fit="contain"
                />
              </Button>
            </Group>
          </Center>
        </Container>
      </Container>
      <AppFooter />
    </>
  );
};

export default HomePage;
