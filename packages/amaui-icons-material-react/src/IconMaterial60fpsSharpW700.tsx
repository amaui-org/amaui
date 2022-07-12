import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial60fpsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSharpW700'
      short_name='60fps'

      {...props}
    >
      <path d="M1.625 19.2V4.8H10V8.2H5V9.8H11V19.2ZM5 15.8H7.625V13.2H5ZM15.375 15.8H19V8.2H15.375ZM12 19.2V4.8H22.375V19.2Z"/>
    </Icon>
  )
});

export default IconMaterial60fpsSharpW700;
