import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReceiptSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptSharpW100'
      short_name='Receipt'

      {...props}
    >
      <path d="M4.3 20.4V3.6L5.5 4.4L6.8 3.6L8.1 4.4L9.4 3.6L10.7 4.4L12 3.6L13.3 4.4L14.6 3.6L15.9 4.4L17.2 3.6L18.5 4.4L19.7 3.6V20.4L18.5 19.6L17.2 20.4L15.9 19.6L14.6 20.4L13.3 19.6L12 20.4L10.7 19.6L9.4 20.4L8.1 19.6L6.8 20.4L5.5 19.6ZM6.65 15.55H17.35V14.85H6.65ZM6.65 12.35H17.35V11.65H6.65ZM6.65 9.15H17.35V8.45H6.65ZM5 19.1H19V4.9H5ZM5 4.9V19.1Z"/>
    </Icon>
  );
});

IconMaterialReceiptSharpW100.displayName = 'AmauiIconMaterialReceiptSharpW100';

export default IconMaterialReceiptSharpW100;
