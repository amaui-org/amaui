import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Barcode'

      short_name='Barcode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 5h2v14H1Zm6 0h1v14H7ZM4 5h2v14H4Zm16 0h3v14h-3ZM10 5h2v14h-2Zm7 0h1v14h-1Zm-4 0h3v14h-3Z"/>
    </Icon>
  );
});

IconMaterialBarcode.displayName = 'AmauiIconMaterialBarcode';

export default IconMaterialBarcode;
