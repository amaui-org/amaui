import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPalletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PalletW100Filled'

      short_name='Pallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.45 18.85v-1.4h15.1v1.4h-1.4v-.7H12.7v.7h-1.4v-.7H5.85v.7Zm1.875-3.4V4.05h11.35v11.4ZM9 8.2h6v-.7H9Z"/>
    </Icon>
  );
});

IconMaterialPalletW100Filled.displayName = 'AmauiIconMaterialPalletW100Filled';

export default IconMaterialPalletW100Filled;
