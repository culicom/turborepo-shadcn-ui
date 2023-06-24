import React, { Fragment } from "react";
import clsx from "clsx";
import escapeHTML from "escape-html";
import { Text } from "slate";

import { H1 } from "ui/typography/h1";
import { H2 } from "ui/typography/h2";
import { H3 } from "ui/typography/h3";
import { H4 } from "ui/typography/h4";
import { P } from "ui/typography/p";

const serialize = (children: any) =>
  children.map((node: any, i: number) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      // @ts-ignore
      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      // @ts-ignore
      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      // @ts-ignore
      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }
    switch (node.type) {
      case "h1":
        return <H1 key={i}>{serialize(node.children)}</H1>;
      case "h2":
        return <H2 key={i}>{serialize(node.children)}</H2>;
      case "h3":
        return <H3 key={i}>{serialize(node.children)}</H3>;
      case "h4":
        return <H4 key={i}>{serialize(node.children)}</H4>;
      case "h5":
        return <h5 key={i}>{serialize(node.children)}</h5>;
      case "h6":
        return <h6 key={i}>{serialize(node.children)}</h6>;
      case "quote":
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case "ul":
        return <ul key={i}>{serialize(node.children)}</ul>;
      case "ol":
        return <ol key={i}>{serialize(node.children)}</ol>;
      case "li":
        return <li key={i}>{serialize(node.children)}</li>;
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );

      default:
        return <P key={i}>{serialize(node.children)}</P>;
    }
  });

type RendererType = {
  content: any;
};

export function Renderer({ content }: RendererType) {
  return serialize(content);
}
