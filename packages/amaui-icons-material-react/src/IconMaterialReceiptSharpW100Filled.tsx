import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReceiptSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptSharpW100Filled'
      short_name='Receipt'

      {...props}
    >
      <path d="M4.3 20.9V3.1L5.5 4.4L6.8 3.1L8.1 4.4L9.4 3.1L10.7 4.4L12 3.1L13.3 4.4L14.6 3.1L15.9 4.4L17.2 3.1L18.5 4.4L19.7 3.1V20.9L18.5 19.6L17.2 20.9L15.9 19.6L14.6 20.9L13.3 19.6L12 20.9L10.7 19.6L9.4 20.9L8.1 19.6L6.8 20.9L5.5 19.6ZM6.65 15.55H17.35V14.85H6.65ZM6.65 12.35H17.35V11.65H6.65ZM6.65 9.15H17.35V8.45H6.65Z"/>
    </Icon>
  );
});

IconMaterialReceiptSharpW100Filled.displayName = 'AmauiIconMaterialReceiptSharpW100Filled';

export default IconMaterialReceiptSharpW100Filled;
