import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSharpW700Filled'
      short_name='Image'

      {...props}
    >
      <path d="M5.575 17.3H18.425L14.25 11.5L11.25 15.5L9 12.5ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialImageSharpW700Filled;
