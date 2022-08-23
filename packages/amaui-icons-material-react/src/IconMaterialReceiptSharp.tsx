import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReceiptSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptSharp'
      short_name='Receipt'

      {...props}
    >
      <path d="M3 22V2L4.5 3.5L6 2L7.5 3.5L9 2L10.5 3.5L12 2L13.5 3.5L15 2L16.5 3.5L18 2L19.5 3.5L21 2V22L19.5 20.5L18 22L16.5 20.5L15 22L13.5 20.5L12 22L10.5 20.5L9 22L7.5 20.5L6 22L4.5 20.5ZM6 17H18V15H6ZM6 13H18V11H6ZM6 9H18V7H6ZM5 19.1H19V4.9H5ZM5 4.9V19.1Z"/>
    </Icon>
  );
});

IconMaterialReceiptSharp.displayName = 'AmauiIconMaterialReceiptSharp';

export default IconMaterialReceiptSharp;
