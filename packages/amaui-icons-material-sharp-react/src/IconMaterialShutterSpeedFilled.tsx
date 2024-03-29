import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShutterSpeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedFilled'

      short_name='ShutterSpeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 3V1h6v2Zm3 19q-1.875 0-3.512-.712-1.638-.713-2.863-1.938T3.7 16.488Q3 14.85 3 13t.712-3.488Q4.425 7.875 5.65 6.65t2.862-1.937Q10.15 4 12 4q1.575 0 3 .525T17.6 6l1.45-1.45 1.4 1.4-1.4 1.45q.9 1.175 1.425 2.6T21 13q0 1.85-.7 3.488-.7 1.637-1.925 2.862t-2.862 1.938Q13.875 22 12 22Zm0-2q2.925 0 4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6T7.038 8.037Q5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20Zm0-9h5.65q-.45-1.275-1.4-2.238-.95-.962-2.15-1.387Zm-1.725 1L13.1 7.1q-1.275-.25-2.562.075-1.288.325-2.363 1.2ZM6.1 14h4.175L7.45 9.1q-.875.975-1.225 2.262Q5.875 12.65 6.1 14Zm3.8 4.625L12 15H6.35q.425 1.25 1.388 2.225.962.975 2.162 1.4Zm1 .275q1.425.275 2.725-.112 1.3-.388 2.2-1.163L13.725 14Zm5.65-2q.9-1.025 1.238-2.287.337-1.263.112-2.613h-4.175Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedFilled.displayName = 'AmauiIconMaterialShutterSpeedFilled';

export default IconMaterialShutterSpeedFilled;
