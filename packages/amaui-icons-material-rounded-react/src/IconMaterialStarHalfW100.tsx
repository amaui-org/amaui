import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarHalfW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfW100'

      short_name='StarHalf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.45 16.7-.925-3.075L15.775 12h-2.85L12 8.9v5.925Zm-4.375.45q-.425.35-.862.038-.438-.313-.288-.838l.725-2.45-1.7-1.25q-.425-.325-.275-.838.15-.512.7-.512h2.175l.725-2.425q.075-.275.287-.4.213-.125.438-.125t.438.125q.212.125.287.4l.725 2.425h2.175q.55 0 .7.512.15.513-.275.838l-1.7 1.25.725 2.45q.15.525-.287.838-.438.312-.863-.038L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarHalfW100.displayName = 'AmauiIconMaterialStarHalfW100';

export default IconMaterialStarHalfW100;
