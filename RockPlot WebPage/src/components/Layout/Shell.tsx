import { Outlet, useOutletContext } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import Layout from "./Layout";
import { useCallback, useState } from "react";
import { useHeadroom } from "@mantine/hooks";

export interface ShellContext {
  tocToggleHandler: () => void;
}

const Shell = () => {
  const [tocIsOpen, setTocIsOpen] = useState(false);
  const [topIsOpen, setTopIsOpen] = useState(false);

  useHeadroom({
    fixedAt: 700,
    onFix: () => {
      setTopIsOpen(false);
    },
    onRelease: () => {
      setTopIsOpen(true);
    },
  });

  const tocToggleHandler = useCallback(() => {
    setTocIsOpen((prev) => !prev);
  }, []);

  // console.log(tocIsOpen, topIsOpen);

  return (
    <Layout
      tocIsOpenValue={tocIsOpen}
      tocIsOpenOnChange={setTocIsOpen}
      header={
        <HomeHeader
          tocClick={tocToggleHandler}
          variant={"default"}
          tocIsOpen={tocIsOpen}
        />
      }
      topIsOpen={topIsOpen}
    >
      {/* <TopNavigation tocClick={tocToggleHandler} /> */}
      <Outlet context={{ tocToggleHandler }} />
    </Layout>
  );
};

export default Shell;

export function useShellCtx() {
  return useOutletContext<ShellContext>();
}
