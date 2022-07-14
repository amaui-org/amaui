import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial60fpsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSharp'
      short_name='60fps'

      {...props}
    >
      <path d="M2 19V5H10V8H5V10H11V19ZM5 16H8V13H5ZM15 16H19V8H15ZM12 19V5H22V19Z"/>
    </Icon>
  );
});

export default IconMaterial60fpsSharp;
