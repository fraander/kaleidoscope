import React from "react";
import Sidebar from "../components/Sidebar";
import ContentBlock from "../components/ContentBlock";
import strings from "../utils/strings";

export default function ManageOrg() {
  return (
    <ContentBlock>
      <h1>{strings.manage.headline}</h1>
      <p>{strings.manage.introContent}</p>
    </ContentBlock>
  );
}
