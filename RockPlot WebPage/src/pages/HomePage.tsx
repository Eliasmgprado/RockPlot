import TopNavigation from "../components/Layout/TopNavigation";
import AppFooter from "../components/Layout/AppFooter";
import Intro from "../components/HomePage/Intro";
import Tutorials from "../components/HomePage/Tutorials";
import Development from "../components/HomePage/Development";
import { useShellCtx } from "../components/Layout/Shell";
import { Center, Container, Group, Image } from "@mantine/core";

const HomePage = () => {
  const { tocToggleHandler } = useShellCtx();
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
              <Image src="png/cga_logo.png" h={100} />
              <Image src="png/sgb_logo.png" h={100} />
            </Group>
          </Center>
        </Container>
      </Container>
      <AppFooter />
    </>
  );
};

export default HomePage;
