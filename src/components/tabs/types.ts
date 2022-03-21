import React from "react";

export type TabsComposition = {
  Tab: React.FC<TabProps>;
  TabPanel: React.FC;
};

export type TabsProps = {
  selected?: number;
};

export type InjectedTabProps = {
  isActive: boolean;
  onSelect: () => void;
};

export type TabProps = {
  disabled?: boolean;
  children: (props: InjectedTabProps) => React.ReactElement;
};
