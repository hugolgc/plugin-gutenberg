import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export function Edit() {
  return <p {...useBlockProps()}>{__("Placeholder...", "plugin-block")}</p>;
}
