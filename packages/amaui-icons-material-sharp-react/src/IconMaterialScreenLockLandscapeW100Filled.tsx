import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscapeW100Filled'

      short_name='ScreenLockLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 15.55v-4.4h1.025v-1q0-.725.487-1.212.488-.488 1.213-.488.725 0 1.213.488.487.487.487 1.212v1h.975v4.4Zm1.725-4.4h2v-1q0-.425-.287-.712-.288-.288-.713-.288t-.713.288q-.287.287-.287.712ZM2.3 17.7V6.3h19.4v11.4Zm3.05-.7h13.3V7H5.35Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscapeW100Filled.displayName = 'AmauiIconMaterialScreenLockLandscapeW100Filled';

export default IconMaterialScreenLockLandscapeW100Filled;
