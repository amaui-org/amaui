import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighlightSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightSharpFilled'
      short_name='Highlight'

      {...props}
    >
      <path d="M5.65 8 3.5 5.9 4.9 4.45 7.05 6.6ZM11 5V2H13V5ZM18.4 8 16.95 6.6 19.1 4.5 20.5 5.9ZM9 22V17L6 14V9H18V14L15 17V22Z"/>
    </Icon>
  );
});

IconMaterialHighlightSharpFilled.displayName = 'AmauiIconMaterialHighlightSharpFilled';

export default IconMaterialHighlightSharpFilled;
