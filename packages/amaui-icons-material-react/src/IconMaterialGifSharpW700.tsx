import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifSharpW700'
      short_name='Gif'

      {...props}
    >
      <path d="M11.3 15.2V8.8H13.2V15.2ZM4.425 15.2V8.8H9.8V10.7H6.3V13.3H7.925V12H9.8V15.2ZM14.7 15.2V8.8H19.575V10.7H16.575V11.55H18.575V13.425H16.575V15.2Z"/>
    </Icon>
  )
});

export default IconMaterialGifSharpW700;
