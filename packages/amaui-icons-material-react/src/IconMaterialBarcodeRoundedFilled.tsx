import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarcodeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeRoundedFilled'
      short_name='Barcode'

      {...props}
    >
      <path d="M1 5h2v14H1Zm6 0h1v14H7ZM4 5h2v14H4Zm16 0h3v14h-3ZM10 5h2v14h-2Zm7 0h1v14h-1Zm-4 0h3v14h-3Z"/>
    </Icon>
  )
});

export default IconMaterialBarcodeRoundedFilled;
