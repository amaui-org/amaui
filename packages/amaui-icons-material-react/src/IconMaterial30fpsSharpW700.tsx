import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial30fpsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsSharpW700'
      short_name='30fps'

      {...props}
    >
      <path d="M1.625 19.2V15.8H7.625V13.7H1.625V10.3H7.625V8.2H1.625V4.8H11V19.2ZM15.375 15.8H19V8.2H15.375ZM12 19.2V4.8H22.375V19.2Z"/>
    </Icon>
  )
});

export default IconMaterial30fpsSharpW700;
