import React, { useState } from "react";
import { useMemo } from "react";
import * as Props from "./types";

type InternalProps = {
  selectedTab: number;
  selectTab: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

const Tabs: React.FC<Props.TabsProps> & Props.TabsComposition = ({
  children,
  selected = 0,
}) => {
  const [selectedTab, selectTab] = useState(selected);
  const _children = useMemo(
    () =>
      componentsEnhancer(children, [Tab, TabPanel], {
        [Tab.name]: {
          selectedTab,
          selectTab,
        },
        [TabPanel.name]: {
          selectedTab,
          selectTab,
        },
      }),
    [children, selectedTab]
  );
  return <React.Fragment>{_children}</React.Fragment>;
};

const Tab: React.FC<Props.TabProps> = ({ children, disabled, ...rest }) => {
  const { selectedTab, selectTab, index } = rest as InternalProps;
  return children({
    onSelect: () => selectTab(index),
    isActive: index === selectedTab,
  });
};

const TabPanel: React.FC = ({ children, ...rest }) => {
  const { selectedTab, index } = rest as Pick<
    InternalProps,
    "selectedTab" | "index"
  >;
  return <React.Fragment>{selectedTab === index && children}</React.Fragment>;
};

const componentsEnhancer = (
  children: React.ReactNode,
  types: Array<Function>,
  props: {
    [key: string]: Partial<any> & React.Attributes;
  }
): React.ReactNode => {
  if (React.Children.count(children) === 0) {
    return children;
  }
  return React.Children.map(children, (child) => {
    if (
      typeof child !== "string" &&
      typeof child !== "number" &&
      typeof child !== "boolean" &&
      child &&
      "type" in child &&
      typeof child.type === "function" &&
      types.includes(child.type)
    ) {
      if (!("index" in props[child.type.name])) {
        props[child.type.name].index = 0;
      } else {
        props[child.type.name].index = props[child.type.name].index + 1;
      }
      let _child;
      if (child.type.name === TabPanel.name) {
        _child = React.cloneElement(
          child,
          { ...props[child.type.name] },
          child.props.children
        );
      } else {
        _child = React.cloneElement(
          child,
          { ...props[child.type.name] },
          componentsEnhancer(child.props.children, types, props)
        );
      }

      return _child;
    } else if (child && typeof child === "object" && "props" in child) {
      const _child = React.cloneElement(
        child,
        {},
        componentsEnhancer(child.props.children, types, props)
      );
      return _child;
    } else {
      return child;
    }
  });
};

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
