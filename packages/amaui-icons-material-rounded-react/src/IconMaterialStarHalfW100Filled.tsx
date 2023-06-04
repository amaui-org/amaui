import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarHalfW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfW100Filled'

      short_name='StarHalf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.4 16.65-.9-3.05 2.25-1.6h-2.8L12 8.9v5.9Zm-4.325.5q-.425.35-.862.038-.438-.313-.288-.838l.725-2.45-1.725-1.25q-.45-.325-.275-.838.175-.512.725-.512h2.175l.725-2.425q.075-.275.287-.4.213-.125.438-.125t.438.125q.212.125.287.4l.725 2.425h2.175q.55 0 .725.512.175.513-.275.838L14.35 13.9l.725 2.45q.15.525-.287.838-.438.312-.863-.038L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarHalfW100Filled.displayName = 'AmauiIconMaterialStarHalfW100Filled';

export default IconMaterialStarHalfW100Filled;
