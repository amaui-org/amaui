import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSharpW700'
      short_name='Image'

      {...props}
    >
      <path d="M5.575 17.3H18.425L14.25 11.5L11.25 15.5L9 12.5ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialImageSharpW700;
