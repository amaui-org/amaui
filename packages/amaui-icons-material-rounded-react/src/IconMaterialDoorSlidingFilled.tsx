import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorSlidingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingFilled'

      short_name='DoorSliding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.975 13q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.4 11 8.975 11t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm6 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.4 11 14.975 11t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-11 8q-.425 0-.712-.288-.288-.287-.288-.712t.288-.712Q3.55 19 3.975 19V5q0-.825.587-1.413Q5.15 3 5.975 3h5.5v16h1V3h5.5q.825 0 1.413.587.587.588.587 1.413v14q.425 0 .713.288.287.287.287.712t-.287.712Q20.4 21 19.975 21Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingFilled.displayName = 'AmauiIconMaterialDoorSlidingFilled';

export default IconMaterialDoorSlidingFilled;
