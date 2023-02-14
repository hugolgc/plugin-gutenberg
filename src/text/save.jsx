import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export function Save() {
  return (
    <section id="test">
      <div className="bg-red-500">
        <p {...useBlockProps.save()}>
          {__("Contenu sauvegardé", "plugin-block")}
        </p>
      </div>
    </section>
  );
}
