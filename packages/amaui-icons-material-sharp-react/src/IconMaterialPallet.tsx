import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPallet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pallet'

      short_name='Pallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-4h20v4h-3v-2h-5.5v2h-3v-2H5v2Zm3-6V2h14v14Zm2-2h10V4H7Zm2-6h6V6H9Zm-2 6V4v10Z"/>
    </Icon>
  );
});

IconMaterialPallet.displayName = 'AmauiIconMaterialPallet';

export default IconMaterialPallet;
