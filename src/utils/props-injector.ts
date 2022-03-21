import React from "react";

const propsInjector = (
  children: React.ReactNode,
  types: Array<Function>,
  props: {
    [key: string]: Partial<any> & React.Attributes;
  },
  beforeInjection?: () => {}
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
          propsInjector(child.props.children, types, props)
        );
      }

      return _child;
    } else if (child && typeof child === "object" && "props" in child) {
      const _child = React.cloneElement(
        child,
        {},
        propsInjector(child.props.children, types, props)
      );
      return _child;
    } else {
      return child;
    }
  });
};

export default propsInjector;
