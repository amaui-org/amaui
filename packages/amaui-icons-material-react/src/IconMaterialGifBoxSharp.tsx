import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifBoxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBoxSharp'
      short_name='GifBox'

      {...props}
    >
      <path d="M7.5 14H10.5V12H9.5V13H8.5V11H10.5V10H7.5ZM11.5 14H12.5V10H11.5ZM13.5 14H14.5V12.5H16V11.5H14.5V11H16.5V10H13.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialGifBoxSharp.displayName = 'AmauiIconMaterialGifBoxSharp';

export default IconMaterialGifBoxSharp;
