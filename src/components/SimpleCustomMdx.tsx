import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import SoftwareCardMDX from "./mdx/SoftwareCardMDX";
import YouTubeMDX from "./mdx/YouTubeMDX";

function parseMarkdown(text: string) {
  if (typeof text !== "string") return text;

  // Handle bold text
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Handle italic text
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

  return text;
}

function Table({ data, className = "" }) {
  const defaultStyles = "w-full border-collapse border border-gray-300 mb-6";
  const headerStyles =
    "bg-gray-100 border border-gray-300 px-4 py-2 text-left font-semibold";
  const cellStyles = "border border-gray-300 px-4 py-2";
  const rowStyles = "even:bg-gray-50";

  let headers = data.headers.map((header, index) => (
    <th key={index} className={headerStyles}>
      {header}
    </th>
  ));

  let rows = data.rows.map((row, index) => (
    <tr key={index} className={rowStyles}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} className={cellStyles}>
          <span dangerouslySetInnerHTML={{ __html: parseMarkdown(cell) }} />
        </td>
      ))}
    </tr>
  ));

  return (
    <table className={`${defaultStyles} ${className}`}>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  SoftwareCard: SoftwareCardMDX,
  YouTube: YouTubeMDX,
};

export function SimpleCustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
