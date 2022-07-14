import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderAllTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllTwoTone'
      short_name='BorderAll'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3v18h18V3zM11 19H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>
    </Icon>
  );
});

export default IconMaterialBorderAllTwoTone;
