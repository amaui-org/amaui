import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrontHand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHand'

      short_name='FrontHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 24q-3.55 0-6.025-2.475Q4 19.05 4 15.5v-11h3v-3h3V0h5v2h3v6h3v7.5q0 3.55-2.475 6.025Q16.05 24 12.5 24Zm0-2q1.35 0 2.538-.512 1.187-.513 2.062-1.388.875-.875 1.388-2.062Q19 16.85 19 15.5V10h-1v5l-.35.025q-1.125.125-1.887.975-.763.85-.763 2h-2q0-1.55.825-2.775Q14.65 14 16 13.425V4h-1v7h-2V2h-1v9h-2V3.5H9V12H7V6.5H6v9q0 1.35.513 2.538.512 1.187 1.387 2.062.875.875 2.063 1.388Q11.15 22 12.5 22Z"/>
    </Icon>
  );
});

IconMaterialFrontHand.displayName = 'AmauiIconMaterialFrontHand';

export default IconMaterialFrontHand;
