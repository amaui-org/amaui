import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PalletW100'

      short_name='Pallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.45 18.85v-1.4h15.1v1.4h-1.4v-.7H12.7v.7h-1.4v-.7H5.85v.7Zm1.875-3.4V4.05h11.35v11.4Zm.7-.7h9.95v-10h-9.95ZM9 8.2h6v-.7H9Zm-1.975 6.55v-10 10Z"/>
    </Icon>
  );
});

IconMaterialPalletW100.displayName = 'AmauiIconMaterialPalletW100';

export default IconMaterialPalletW100;
