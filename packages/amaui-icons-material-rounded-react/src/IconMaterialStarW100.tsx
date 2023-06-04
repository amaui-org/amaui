import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarW100'

      short_name='Star'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.075 17.15q-.425.35-.862.038-.438-.313-.288-.838l.725-2.45-1.725-1.25q-.45-.325-.275-.838.175-.512.725-.512h2.175l.725-2.425q.075-.275.287-.4.213-.125.438-.125t.438.125q.212.125.287.4l.725 2.425h2.175q.55 0 .725.512.175.513-.275.838L14.35 13.9l.725 2.45q.15.525-.287.838-.438.312-.863-.038L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarW100.displayName = 'AmauiIconMaterialStarW100';

export default IconMaterialStarW100;
