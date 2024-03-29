import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalance'

      short_name='HeatPumpBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21.6q-.825 0-1.412-.587Q1 20.425 1 19.6v-7q0-.425.288-.713.287-.287.712-.287h20q.425 0 .712.287.288.288.288.713v7q0 .825-.587 1.413-.588.587-1.413.587Zm0-2h18v-6H3v6Zm18-6H3Zm-14 5q-1.25 0-2.125-.875T4 15.6v-8q0-.425.287-.713Q4.575 6.6 5 6.6t.713.287Q6 7.175 6 7.6v8q0 .425.287.712.288.288.713.288t.713-.288Q8 16.025 8 15.6v-6q0-1.25.875-2.125T11 6.6q1.25 0 2.125.875T14 9.6v6q0 .425.288.712.287.288.712.288t.713-.288Q16 16.025 16 15.6v-7q0-1.25.875-2.125T19 5.6h1.175l-.475-.475q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3l2.175 2.175q.3.3.3.713 0 .412-.3.712L21.1 9.475q-.275.275-.675.263-.4-.013-.7-.288-.275-.275-.275-.7 0-.425.275-.7l.45-.45H19q-.425 0-.712.287Q18 8.175 18 8.6v7q0 1.25-.875 2.125T15 18.6q-1.25 0-2.125-.875T12 15.6v-6q0-.425-.287-.713Q11.425 8.6 11 8.6t-.712.287Q10 9.175 10 9.6v6q0 1.25-.875 2.125T7 18.6Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalance.displayName = 'AmauiIconMaterialHeatPumpBalance';

export default IconMaterialHeatPumpBalance;
