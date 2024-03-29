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
      <path d="m9.05 12.725 1.725-4.7Q11.05 7.25 11.8 6.9q.75-.35 1.525-.075l6.575 2.4q1.575.575 2.275 2.062.7 1.488.125 3.063l-1.025 2.825Zm3.6-4q-.2.5-.362.937-.163.438-.338.938l-.325.925ZM19.3 19.65 2.375 13.5q-.4-.125-.563-.5-.162-.375-.037-.775t.513-.575q.387-.175.787-.025L20 17.775q.4.125.562.5.163.375.038.775t-.512.575q-.388.175-.788.025Zm-12.975-8.1q-1.25 0-2.125-.875T3.325 8.55q0-1.25.875-2.125t2.125-.875q1.25 0 2.125.875t.875 2.125q0 1.25-.875 2.125t-2.125.875Zm0-2q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm5.3 1.975 8.45 3.1.35-.95q.275-.8-.062-1.55-.338-.75-1.138-1.025L12.65 8.725Zm-5.3-2.95Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngled.displayName = 'AmauiIconMaterialAirlineSeatFlatAngled';

export default IconMaterialAirlineSeatFlatAngled;
