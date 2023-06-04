import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrainW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrainW100Filled'

      short_name='Train'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 15V6q0-.875.525-1.413.525-.537 1.438-.825.912-.287 2.137-.375Q10.625 3.3 12 3.3q1.4 0 2.613.087 1.212.088 2.125.375.912.288 1.437.825.525.538.525 1.413v9q0 1.125-.787 1.913-.788.787-1.913.787l1.5 1.5v.5H17l-2-2H9l-2 2h-.5v-.5L8 17.7q-1.125 0-1.912-.787Q5.3 16.125 5.3 15Zm.7-3.7h5.65V6.4H6Zm6.35 0H18V6.4h-5.65ZM8.5 15.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q8.925 13.5 8.5 13.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm7 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialTrainW100Filled.displayName = 'AmauiIconMaterialTrainW100Filled';

export default IconMaterialTrainW100Filled;
