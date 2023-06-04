import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortraitW100'

      short_name='ScreenLockPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 15.55v-4.4h1.025v-1q0-.725.487-1.212.488-.488 1.213-.488.725 0 1.213.488.487.487.487 1.212v1h.975v4.4Zm1.725-4.4h2v-1q0-.425-.287-.712-.288-.288-.713-.288t-.713.288q-.287.287-.287.712ZM6.3 21.7V2.3h11.4v19.4Zm.7-3.05h10V5.35H7ZM7 21h10v-1.65H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortraitW100.displayName = 'AmauiIconMaterialScreenLockPortraitW100';

export default IconMaterialScreenLockPortraitW100;
