import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceW100Filled'

      short_name='Fence'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 19.35q-.325 0-.537-.212-.213-.213-.213-.538v-3.25H5.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h.35v-3.3H5.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h.35V7.575q0-.15.05-.275.05-.125.175-.25l1.6-1.6Q7.7 5.225 8 5.225q.3 0 .525.225L10 6.925l1.475-1.475q.225-.225.538-.225.312 0 .537.225l1.475 1.475 1.45-1.475q.225-.225.537-.225.313 0 .538.225l1.6 1.6q.125.125.175.25.05.125.05.275v3.075h.325q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.325v3.3h.325q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.325v3.25q0 .325-.212.538-.213.212-.538.212Zm-.05-8.7h3.3v-3.1L8 5.9 6.35 7.55Zm4 0h3.3v-3.1L12 5.9l-1.65 1.65Zm4.025 0h3.275v-3.1L16 5.9l-1.625 1.65Zm-8.025 4h3.3v-3.3h-3.3Zm4 0h3.3v-3.3h-3.3Zm4.025 0h3.275v-3.3h-3.275Zm-8.025 4h3.3v-3.3h-3.3Zm4 0h3.3v-3.3h-3.3Zm4.025 0h3.275v-3.3h-3.275Z"/>
    </Icon>
  );
});

IconMaterialFenceW100Filled.displayName = 'AmauiIconMaterialFenceW100Filled';

export default IconMaterialFenceW100Filled;
