import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPalletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PalletFilled'

      short_name='Pallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-4h20v4h-3v-2h-5.5v2h-3v-2H5v2Zm3-6V2h14v14Zm4-8h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialPalletFilled.displayName = 'AmauiIconMaterialPalletFilled';

export default IconMaterialPalletFilled;
