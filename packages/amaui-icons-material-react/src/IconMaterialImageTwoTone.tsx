import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageTwoTone'
      short_name='Image'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z"/>
    </Icon>
  );
});

IconMaterialImageTwoTone.displayName = 'AmauiIconMaterialImageTwoTone';

export default IconMaterialImageTwoTone;
