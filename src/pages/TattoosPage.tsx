import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSearch from "../components/AppSearch";
import TattooPost from "../components/TattooPost";
import TattooItem from "../components/TattooItem";
import tattoos from "../data/tattoos";
import UploadFlie from "../feature/UploadFlie";

type Props = {};

export default function TattoosPage({}: Props) {
  const [selectedTattoo, setSelectedTattoo] = useState<boolean>(false); // useState([default value]) return value from state
  const [searchText, setSearchText] = useState(""); // useState

  const filteredTattoos = tattoos.filter((tattoo: any) => {
    return tattoo.title.includes(searchText);
  });

  const tattooElement = filteredTattoos.map((tattoo: string, index: number) => {
    return (
      <TattooItem
        key={index}
        tattoo={tattoo}
        onTattooClick={(theTattoo: any) => setSelectedTattoo(theTattoo)}
      />
    );
  });

  let tattooPost = null;
  if (selectedTattoo) {
    tattooPost = (
      <TattooPost
        tattoo={selectedTattoo}
        onBgClick={() => setSelectedTattoo(false)}
      />
    );
  }

  let contextNow = "UploadPage";

  return contextNow === "TattoosPage" ? (
    <>
      <AppHeader />
      <section className=" p-9">
        <div className=" mx-auto container p-9">
          <AppSearch value={searchText} onValueChanged={setSearchText} />
          <div className="app-grid">{tattooElement}</div>
        </div>
      </section>
      {tattooPost}
    </>
  ) : (
    <UploadFlie />
  );
}
