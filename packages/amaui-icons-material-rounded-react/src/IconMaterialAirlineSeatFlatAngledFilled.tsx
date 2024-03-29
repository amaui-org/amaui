import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatAngledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngledFilled'

      short_name='AirlineSeatFlatAngled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.025 12.725 1.725-4.7q.275-.775 1.025-1.125.75-.35 1.525-.075l6.575 2.4q1.575.575 2.275 2.062.7 1.488.125 3.063l-1.025 2.825Zm10.25 6.925L2.35 13.5q-.4-.125-.562-.5-.163-.375-.038-.775t.513-.575q.387-.175.787-.025l16.925 6.15q.4.125.563.5.162.375.037.775t-.513.575q-.387.175-.787.025Zm-12.95-8.1q-1.25 0-2.125-.875T3.325 8.55q0-1.25.875-2.125t2.125-.875q1.25 0 2.125.875t.875 2.125q0 1.25-.875 2.125t-2.125.875Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledFilled.displayName = 'AmauiIconMaterialAirlineSeatFlatAngledFilled';

export default IconMaterialAirlineSeatFlatAngledFilled;
