import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPunchClock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClock'

      short_name='PunchClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V6h3V1h12v5h3v16ZM8 6h8V3H8ZM5 20h14V8H5Zm7-1q-2.075 0-3.537-1.462Q7 16.075 7 14q0-2.075 1.463-3.538Q9.925 9 12 9t3.538 1.462Q17 11.925 17 14q0 2.075-1.462 3.538Q14.075 19 12 19Zm0-1.5q1.45 0 2.475-1.025Q15.5 15.45 15.5 14q0-1.45-1.025-2.475Q13.45 10.5 12 10.5q-1.45 0-2.475 1.025Q8.5 12.55 8.5 14q0 1.45 1.025 2.475Q10.55 17.5 12 17.5Zm1.15-1.65L11.5 14.2v-2.7h1v2.3l1.35 1.35ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPunchClock.displayName = 'AmauiIconMaterialPunchClock';

export default IconMaterialPunchClock;
