/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import GalleryGridRow from "./GalleryGridRow";
import { Flex } from "@aws-amplify/ui-react";
export default function GalleryGrid(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="2px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "GalleryGrid")}
      {...rest}
    >
      <GalleryGridRow
        display="flex"
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Gallery / Grid / Row44461873")}
      ></GalleryGridRow>
      <GalleryGridRow
        display="flex"
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Gallery / Grid / Row44461874")}
      ></GalleryGridRow>
      <GalleryGridRow
        display="flex"
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Gallery / Grid / Row44461875")}
      ></GalleryGridRow>
      <GalleryGridRow
        display="flex"
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Gallery / Grid / Row44461876")}
      ></GalleryGridRow>
    </Flex>
  );
}
