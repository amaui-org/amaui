import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspaceTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceTwoTone'
      short_name='KeyboardBackspace'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceTwoTone.displayName = 'AmauiIconMaterialKeyboardBackspaceTwoTone';

export default IconMaterialKeyboardBackspaceTwoTone;
