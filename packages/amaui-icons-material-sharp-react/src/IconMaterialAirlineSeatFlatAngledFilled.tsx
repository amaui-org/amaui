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
      <path d="m9.025 12.725 2.4-6.575L23.65 10.6l-2.4 6.575Zm-7.6.425.675-1.875 18.8 6.85L20.225 20Zm4.9-1.6q-1.25 0-2.125-.875T3.325 8.55q0-1.25.875-2.125t2.125-.875q1.25 0 2.125.875t.875 2.125q0 1.25-.875 2.125t-2.125.875Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledFilled.displayName = 'AmauiIconMaterialAirlineSeatFlatAngledFilled';

export default IconMaterialAirlineSeatFlatAngledFilled;
