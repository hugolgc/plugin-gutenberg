import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export function Save(props) {
  const blockProps = useBlockProps.save();

  return (
    <section {...blockProps}>
      <div className="container mx-auto px-8">
        <div className="flex">
          <div className="content">
            <h1 className="title">{props.attributes.title}</h1>
            <p className="text">{props.attributes.content}</p>
          </div>
          <div className="content">
            <figure>
              <img src={props.attributes.image} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
