import { useEffect } from "react";
import cx from "clsx";
import classes from "./Layout.module.css";
import { AppShell } from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import AppNavBar from "./AppNavBar";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export interface LayoutProps {
  /** App components */
  children?: React.ReactNode;

  /** Controlled TOC is Open value */
  tocIsOpenValue?: boolean;

  /** Function run on tocIsOpen change */
  tocIsOpenOnChange?: (value: boolean) => void;

  /** Header component */
  header?: React.ReactNode;

  /** Header height */
  headerHeight?: number;

  /** Header ClassName */
  headerClassName?: string;

  /** Footer component */
  footer?: React.ReactNode;

  /** top navbar is open */
  topIsOpen?: boolean;
}

const Layout = (props: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: "Page View",
    });
  }, [location]);

  const [tocIsOpen, setTocIsOpen] = useUncontrolled({
    value: props.tocIsOpenValue,
    defaultValue: false,
    finalValue: false,
    onChange: props.tocIsOpenOnChange,
  });

  let pageClass = classes["page-content-wrap"];

  pageClass = tocIsOpen
    ? [pageClass, classes["withmenu"]].join(" ")
    : pageClass;

  let tocClass = classes.toc;
  tocClass = tocIsOpen ? tocClass : [tocClass, classes.deactivated].join(" ");

  useEffect(() => {
    // console.log("resize")
    setTimeout(() => window.dispatchEvent(new Event("resize")), 350);
  }, [tocIsOpen]);

  // console.log(tocIsOpen, !props.topIsOpen);

  return (
    <>
      <AppShell
        padding={0}
        // navbarOffsetBreakpoint={9999}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !tocIsOpen },
        }}
        header={{
          height: props.headerHeight ? props.headerHeight : 60,
          collapsed: !props.topIsOpen,
        }}
        footer={{ height: 60, collapsed: !props.footer }}
        classNames={{
          header: cx(props.headerClassName, classes.header),
          main: classes.main,
        }}
      >
        {props.topIsOpen && <AppShell.Header>{props.header}</AppShell.Header>}
        {tocIsOpen && <AppNavBar onClose={() => setTocIsOpen(false)} />}
        <AppShell.Main>{props.children}</AppShell.Main>
        <AppShell.Footer p={0}>{props.footer}</AppShell.Footer>
      </AppShell>
    </>
  );
};

export default Layout;
