import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceFilled'

      short_name='HeatPumpBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21.6q-.825 0-1.412-.587Q1 20.425 1 19.6v-7q0-.425.288-.713.287-.287.712-.287h20q.425 0 .712.287.288.288.288.713v7q0 .825-.587 1.413-.588.587-1.413.587Zm4-3q1.25 0 2.125-.875T10 15.6v-6q0-.425.288-.713.287-.287.712-.287t.713.287Q12 9.175 12 9.6v6q0 1.25.875 2.125T15 18.6q1.25 0 2.125-.875T18 15.6v-7q0-.425.288-.713.287-.287.712-.287h1.175l-.45.45q-.275.275-.275.7 0 .425.275.7.3.275.7.288.4.012.675-.263L23.275 7.3q.3-.3.3-.712 0-.413-.3-.713L21.1 3.7q-.3-.3-.7-.3-.4 0-.7.3-.3.3-.3.712 0 .413.3.713l.475.475H19q-1.25 0-2.125.875T16 8.6v7q0 .425-.287.712-.288.288-.713.288t-.712-.288Q14 16.025 14 15.6v-6q0-1.25-.875-2.125T11 6.6q-1.25 0-2.125.875T8 9.6v6q0 .425-.287.712-.288.288-.713.288t-.713-.288Q6 16.025 6 15.6v-8q0-.425-.287-.713Q5.425 6.6 5 6.6t-.713.287Q4 7.175 4 7.6v8q0 1.25.875 2.125T7 18.6Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalanceFilled.displayName = 'AmauiIconMaterialHeatPumpBalanceFilled';

export default IconMaterialHeatPumpBalanceFilled;
