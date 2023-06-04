import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscapeW100'

      short_name='ScreenLockLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.2 15.55q-.375 0-.638-.263-.262-.262-.262-.637v-2.6q0-.375.262-.638.263-.262.638-.262h.125v-1q0-.725.487-1.212.488-.488 1.213-.488.725 0 1.213.488.487.487.487 1.212v1h.125q.35 0 .6.262.25.263.25.638v2.6q0 .375-.262.637-.263.263-.638.263Zm.825-4.4h2v-1q0-.425-.287-.712-.288-.288-.713-.288t-.713.288q-.287.287-.287.712ZM3.8 17.7q-.65 0-1.075-.425Q2.3 16.85 2.3 16.2V7.8q0-.65.425-1.075Q3.15 6.3 3.8 6.3h16.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm1.55-.7h13.3V7H5.35Zm-.7 0V7H3.8q-.3 0-.55.25Q3 7.5 3 7.8v8.4q0 .3.25.55.25.25.55.25Zm14.7 0h.85q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q20.5 7 20.2 7h-.85ZM21 7h-1.65H21ZM3 7h1.65H3Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscapeW100.displayName = 'AmauiIconMaterialScreenLockLandscapeW100';

export default IconMaterialScreenLockLandscapeW100;
