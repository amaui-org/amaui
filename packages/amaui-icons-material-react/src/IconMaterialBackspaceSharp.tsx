import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceSharp'
      short_name='Backspace'

      {...props}
    >
      <path d="M11.4 16 14 13.4 16.6 16 18 14.6 15.4 12 18 9.4 16.6 8 14 10.6 11.4 8 10 9.4 12.6 12 10 14.6ZM7.95 19 3 12 7.95 5H21V19ZM9 17H19V7H9L5.45 12ZM19 17V12V7Z"/>
    </Icon>
  );
});

IconMaterialBackspaceSharp.displayName = 'AmauiIconMaterialBackspaceSharp';

export default IconMaterialBackspaceSharp;
