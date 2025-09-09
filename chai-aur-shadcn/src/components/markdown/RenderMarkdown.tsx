"use client";

import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';

const customComponents: Components = {
  // Headings - kept separate as requested
  h1: ({ children, ...props }) => (
    <h1
      className={`text-5xl md:text-6xl font-extrabold mt-8 mb-4 border-b pb-2 ${props.className || ''}`.trim()}
      {...props} // Spread the rest of the props including `id` if present
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className={`text-4xl md:text-5xl font-bold mt-6 mb-3 border-b pb-1 ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className={`text-3xl md:text-4xl font-semibold mt-5 mb-2 ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className={`text-2xl md:text-3xl font-medium mt-4 mb-1 ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5
      className={`text-xl md:text-2xl font-normal mt-3 mb-1 ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6
      className={`text-lg md:text-xl font-normal mt-2 mb-1 text-gray-600 ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children, ...props }) => (
    <p className={`mb-4 leading-relaxed ${props.className || ''}`.trim()} {...props}>
      {children}
    </p>
  ),

  // Links
  // Correctly destructure `href` and `title` (optional) from props
  a: ({ children, href, title, ...props }) => (
    <a
      href={href}
      title={title} // Pass title if it exists
      className={`text-blue-600 hover:underline dark:text-blue-400 ${props.className || ''}`.trim()}
      {...props} // Pass any remaining HTML attributes
    >
      {children}
    </a>
  ),

  // Unordered Lists
  ul: ({ children, ...props }) => (
    <ul className={`list-disc pl-5 mb-4 ${props.className || ''}`.trim()} {...props}>
      {children}
    </ul>
  ),

  // Ordered Lists
  ol: ({ children, ...props }) => (
    <ol className={`list-decimal pl-5 mb-4 ${props.className || ''}`.trim()} {...props}>
      {children}
    </ol>
  ),

  // List Items
  li: ({ children, ...props }) => (
    <li className={`mb-1 ${props.className || ''}`.trim()} {...props}>
      {children}
    </li>
  ),

  // Blockquotes
  blockquote: ({ children, ...props }) => (
    <blockquote
      className={`border-l-4 border-gray-300 pl-4 py-2 my-4 italic text-gray-700 dark:text-gray-300 ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Inline Code
  code: ({ children, ...props }) => (
    <code
      className={`bg-gray-100 dark:bg-gray-700 text-purple-600 dark:text-purple-300 px-1 py-0.5 rounded-md text-sm font-mono ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </code>
  ),

  // // Code Blocks (pre > code)
  // pre: ({ children, ...props }) => {
  //   const codeChild = React.Children.toArray(children)[0];

  //   let languageClassName = '';
  //   let codeContent = children; // Default to children if no valid code child

  //   if (React.isValidElement(codeChild) && codeChild.type === 'code') {
  //     const { className: innerClassName, children: codeChildren, ...codeProps } = codeChild.props;

  //     if (typeof innerClassName === 'string') {
  //       languageClassName = innerClassName;
  //     }
  //     codeContent = codeChildren;
  //   }

  //   return (
  //     <pre
  //       className={`bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm my-4 font-mono ${props.className || ''}`.trim()}
  //       {...props}
  //     >
  //       <code className={languageClassName}>
  //         {codeContent}
  //       </code>
  //     </pre>
  //   );
  // },

  // Tables
  table: ({ children, ...props }) => (
    <table
      className={`w-full border-collapse my-4 text-left ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </table>
  ),
  th: ({ children, ...props }) => (
    <th
      className={`border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-700 font-semibold ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className={`border border-gray-300 dark:border-gray-600 px-4 py-2 ${props.className || ''}`.trim()}
      {...props}
    >
      {children}
    </td>
  ),

  // Horizontal Rule
  hr: ({ ...props }) => (
    <hr className={`my-8 border-t-2 border-gray-200 dark:border-gray-700 ${props.className || ''}`.trim()} {...props} />
  ),

  // // Images
  // img: ({ src, alt, ...props }) => (
  //   <img
  //     src={src}
  //     alt={alt}
  //     className={`max-w-full h-auto rounded-lg my-4 mx-auto block ${props.className || ''}`.trim()}
  //     {...props}
  //   />
  // ),

  // Strong (Bold)
  strong: ({ children, ...props }) => (
    <strong className={`font-bold ${props.className || ''}`.trim()} {...props}>
      {children}
    </strong>
  ),

  // Emphasis (Italic)
  em: ({ children, ...props }) => (
    <em className={`italic ${props.className || ''}`.trim()} {...props}>
      {children}
    </em>
  ),
};

export function RenderMarkdown({ children }: { children: string }): React.ReactElement {
  return (
    <ReactMarkdown
      components={customComponents}
      // remarkPlugins={[remarkGfm]}
      // rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
}