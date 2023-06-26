import React from "react";
import Sidebar from "../components/Sidebar";
import ContentBlock from "../components/ContentBlock";

export default function ManageOrg() {
  return (
    <Sidebar>
      <ContentBlock>
        <h1>Manage your club</h1>
        <p>
          We've collected numerous resources, including our own programs, to help
          you manage your club and make it as compelling as possible to students
          at Northeastern.
        </p>
      </ContentBlock>
    </Sidebar>
  );
}
