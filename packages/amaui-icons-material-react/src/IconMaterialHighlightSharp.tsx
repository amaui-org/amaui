import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighlightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightSharp'
      short_name='Highlight'

      {...props}
    >
      <path d="M5.65 8 3.5 5.9 4.9 4.45 7.05 6.6ZM11 5V2H13V5ZM18.4 8 16.95 6.6 19.1 4.5 20.5 5.9ZM9 22V17L6 14V9H18V14L15 17V22ZM11 20H13V16.175L16 13.175V11H8V13.175L11 16.175ZM12 15.5Z"/>
    </Icon>
  );
});

IconMaterialHighlightSharp.displayName = 'AmauiIconMaterialHighlightSharp';

export default IconMaterialHighlightSharp;
