import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffW100Filled'

      short_name='NearbyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.975 14.525-.65-.6 1.75-1.8q.2-.2.2-.425 0-.225-.2-.425l-6.35-6.35q-.2-.2-.425-.2-.225 0-.425.2l-1.75 1.75-.65-.6 1.75-1.8q.45-.45 1.075-.45t1.075.45l6.4 6.35q.45.45.45 1.05 0 .6-.45 1.05Zm-4.6 4.6q-.45.45-1.075.45t-1.075-.45l-6.35-6.35q-.425-.425-.425-1.05t.425-1.05l2.7-2.7-3.65-3.65Q3.8 4.2 3.8 4.075t.125-.25q.125-.125.25-.125t.25.125l15.75 15.75q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-3.6-3.6Zm-7.85-7 6.35 6.35q.2.2.425.2.225 0 .425-.2L15.1 16.1l-1.95-1.95-.325.3q-.225.2-.537.187-.313-.012-.513-.212L9.6 12.25q-.225-.225-.213-.538.013-.312.238-.537L9.9 10.9l-2-2-2.375 2.375q-.2.2-.2.425 0 .225.2.425ZM15 12.25 11.75 9q.225-.225.525-.225.3 0 .525.225l2.2 2.2q.225.225.225.525 0 .3-.225.525Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffW100Filled.displayName = 'AmauiIconMaterialNearbyOffW100Filled';

export default IconMaterialNearbyOffW100Filled;
