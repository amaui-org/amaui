import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReceiptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptW100'

      short_name='Receipt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.4V3.6l1.2.8 1.3-.8 1.3.8 1.3-.8 1.3.8 1.3-.8 1.3.8 1.3-.8 1.3.8 1.3-.8 1.3.8 1.2-.8v16.8l-1.2-.8-1.3.8-1.3-.8-1.3.8-1.3-.8-1.3.8-1.3-.8-1.3.8-1.3-.8-1.3.8-1.3-.8Zm2.35-4.85h10.7v-.7H6.65Zm0-3.2h10.7v-.7H6.65Zm0-3.2h10.7v-.7H6.65ZM5 19.1h14V4.9H5ZM5 4.9v14.2Z"/>
    </Icon>
  );
});

IconMaterialReceiptW100.displayName = 'AmauiIconMaterialReceiptW100';

export default IconMaterialReceiptW100;
