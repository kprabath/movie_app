import React from 'react';

/**
 * RichText enables us to use tags (think HTML) to style text
 * in a convinient way.
 */
const RichText = ({children, ...props}: OwnProps) => {
  const {openTag, closeTag, render} = props;

  if (children.includes(closeTag)) {
    const parts = children.split(closeTag);
    return (
      <>
        {parts.map((part: string, index: number) => (
          <RichText key={index} {...props}>
            {part}
          </RichText>
        ))}
      </>
    );
  }

  if (children.includes(openTag)) {
    const parts = children.split(openTag);
    if (parts.length === 2) {
      return render(parts[0], parts[1]);
    }
  }

  return render(children, '');
};

interface OwnProps {
  openTag: string;
  closeTag: string;
  children: string;
  render: (partOutsideTag: string, partInsideTag: string) => JSX.Element;
}

export default RichText;
