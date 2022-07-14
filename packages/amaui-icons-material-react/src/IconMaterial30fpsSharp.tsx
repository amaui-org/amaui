import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial30fpsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsSharp'
      short_name='30fps'

      {...props}
    >
      <path d="M2 19V16H8V13.5H2V10.5H8V8H2V5H11V19ZM15 16H19V8H15ZM12 19V5H22V19Z"/>
    </Icon>
  );
});

export default IconMaterial30fpsSharp;
