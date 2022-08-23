import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAppsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppsTwoTone'
      short_name='Apps'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
    </Icon>
  );
});

IconMaterialAppsTwoTone.displayName = 'AmauiIconMaterialAppsTwoTone';

export default IconMaterialAppsTwoTone;
