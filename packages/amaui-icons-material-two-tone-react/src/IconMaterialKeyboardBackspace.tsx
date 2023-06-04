import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspace'

      short_name='KeyboardBackspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspace.displayName = 'AmauiIconMaterialKeyboardBackspace';

export default IconMaterialKeyboardBackspace;
