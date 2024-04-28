import {
  Anchor,
  Button,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./Development.module.css";
import { MdOutlineFileDownload } from "react-icons/md";

const Development = () => {
  const navigate = useNavigate();

  return (
    <Container
      py="8rem"
      style={{ borderBottom: "1px solid rgba(34,36,38,.15)" }}
      fluid
    >
      <Container size="lg">
        <Grid>
          <Grid.Col span={6}>
            <Title order={1} fw={700} mb="sm">
              RockPlot is in Development
            </Title>
            <Text size="xl" mb="xl">
              The application is still under development. Currently, the
              application has the main data processing tools and and the popular
              igneous rock classification graphics. Some functionalities are
              under development, such as machine learning algorithms and map
              visualization.
            </Text>

            <Button
              color="blue"
              rightSection={<MdOutlineFileDownload size={"2rem"} />}
              size="lg"
              classNames={{ label: classes.buttonlabel }}
              onClick={() => {
                navigate("/RockPlot/downloads", { replace: true });
              }}
            >
              Download RockPlot
            </Button>
            <Title order={1} fw={700} mb="sm" mt="3rem">
              Help App Development
            </Title>
            <Text size="xl" mb="sm">
              Contact me if you have any trouble with RockPlot.
            </Text>
            <Anchor
              p={0}
              component="a"
              href="mailto:RockPlott@gmail.com"
              size="xl"
            >
              elias.prado@sgb.gov.br
            </Anchor>
          </Grid.Col>
          <Grid.Col span={6} px="lg">
            <Image src="svg/logo/rockplot_logo_HQ.svg" maw="400px" mx="auto" />
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};

export default Development;
