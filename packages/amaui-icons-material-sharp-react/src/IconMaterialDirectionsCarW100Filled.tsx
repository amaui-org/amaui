import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsCarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCarW100Filled'

      short_name='DirectionsCar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17.7v2h-.7v-7.5l2.075-5.9h11.25l2.075 5.9v7.5H19v-2Zm.3-6.2h13.4L17.1 7H6.9Zm2.1 4.1q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.825 13.6 7.4 13.6t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialDirectionsCarW100Filled.displayName = 'AmauiIconMaterialDirectionsCarW100Filled';

export default IconMaterialDirectionsCarW100Filled;
