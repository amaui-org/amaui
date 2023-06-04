import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReceiptW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptW100Filled'

      short_name='Receipt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.9V3.1l1.2 1.3 1.3-1.3 1.3 1.3 1.3-1.3 1.3 1.3L12 3.1l1.3 1.3 1.3-1.3 1.3 1.3 1.3-1.3 1.3 1.3 1.2-1.3v17.8l-1.2-1.3-1.3 1.3-1.3-1.3-1.3 1.3-1.3-1.3-1.3 1.3-1.3-1.3-1.3 1.3-1.3-1.3-1.3 1.3-1.3-1.3Zm2.35-5.35h10.7v-.7H6.65Zm0-3.2h10.7v-.7H6.65Zm0-3.2h10.7v-.7H6.65Z"/>
    </Icon>
  );
});

IconMaterialReceiptW100Filled.displayName = 'AmauiIconMaterialReceiptW100Filled';

export default IconMaterialReceiptW100Filled;
