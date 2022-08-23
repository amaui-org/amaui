import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspaceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceSharp'
      short_name='KeyboardBackspace'

      {...props}
    >
      <path d="M9 18 3 12 9 6 10.4 7.4 6.8 11H21V13H6.8L10.4 16.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceSharp.displayName = 'AmauiIconMaterialKeyboardBackspaceSharp';

export default IconMaterialKeyboardBackspaceSharp;
