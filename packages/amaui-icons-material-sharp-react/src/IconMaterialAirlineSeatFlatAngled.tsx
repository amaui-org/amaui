import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatAngled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngled'

      short_name='AirlineSeatFlatAngled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.05 12.725 2.4-6.575 12.225 4.45-2.4 6.575Zm-7.6.425.675-1.875 18.8 6.85L20.25 20Zm4.875-1.6q-1.25 0-2.125-.875T3.325 8.55q0-1.25.875-2.125t2.125-.875q1.25 0 2.125.875t.875 2.125q0 1.25-.875 2.125t-2.125.875Zm0-2q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm5.3 1.975 8.45 3.1 1.05-2.85-8.475-3.05Zm-5.3-2.95Zm6.325.15-1.025 2.8Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngled.displayName = 'AmauiIconMaterialAirlineSeatFlatAngled';

export default IconMaterialAirlineSeatFlatAngled;
