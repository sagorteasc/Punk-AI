import { useState } from "react";
import { FloatingIndicator, Tabs } from "@mantine/core";
import classes from "./Tabs.module.css";
import Card from "./Card";
import { tabItems } from "@/data/tabItems";
import { tabData } from "@/data/tabData";
import { useTranslation } from "react-i18next";
import { tabDataFr } from "@/data/tabData.fr";

const AllTabs = () => {
  const { t, i18n } = useTranslation();
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>("awareness");
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  const activeData = i18n.language === "fr-CA" ? tabDataFr : tabData;

  const currentTabData = value
    ? activeData[value as keyof typeof activeData]
    : [];

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.list}>
        {tabItems.map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            ref={setControlRef(tab.value)}
            className={classes.tab}
          >
            {t(tab.translationKey)}
          </Tabs.Tab>
        ))}

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={classes.indicator}
        />
      </Tabs.List>

      <div className="w-11/12 mx-auto mt-15">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTabData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Tabs>
  );
};

export default AllTabs;
