import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifSharp'
      short_name='Gif'

      {...props}
    >
      <path d="M11.5 15V9H13V15ZM5 15V9H10V10.5H6.5V13.5H8.5V12H10V15ZM14.5 15V9H19V10.5H16V11.5H18V13H16V15Z"/>
    </Icon>
  );
});

IconMaterialGifSharp.displayName = 'AmauiIconMaterialGifSharp';

export default IconMaterialGifSharp;
