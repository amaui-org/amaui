import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDehazeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeSharpW700'
      short_name='Dehaze'

      {...props}
    >
      <path d="M1.425 19.35V16.2H22.575V19.35ZM1.425 13.575V10.425H22.575V13.575ZM1.425 7.8V4.65H22.575V7.8Z"/>
    </Icon>
  )
});

export default IconMaterialDehazeSharpW700;
