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
      <path d="M9 13q.425 0 .713-.288Q10 12.425 10 12t-.287-.713Q9.425 11 9 11t-.712.287Q8 11.575 8 12t.288.712Q8.575 13 9 13Zm6 0q.425 0 .713-.288Q16 12.425 16 12t-.287-.713Q15.425 11 15 11t-.712.287Q14 11.575 14 12t.288.712Q14.575 13 15 13ZM3 21v-2h1V3h7.5v16h1V3H20v16h1v2Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingFilled.displayName = 'AmauiIconMaterialDoorSlidingFilled';

export default IconMaterialDoorSlidingFilled;
