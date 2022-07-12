import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebSharpW700'
      short_name='Web'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM4.3 12.2H14.2V8.7H4.3ZM4.3 17.7H14.2V14.2H4.3ZM16.2 17.7H19.7V8.7H16.2Z"/>
    </Icon>
  )
});

export default IconMaterialWebSharpW700;
