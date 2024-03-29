import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIronFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronFilled'

      short_name='Iron'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18q-.425 0-.712-.288Q2 17.425 2 17v-2q0-1.65 1.175-2.825Q4.35 11 6 11h9v-1q0-.425-.287-.713Q14.425 9 14 9h-4q-.275 0-.5.125-.225.125-.35.35-.15.25-.375.388-.225.137-.5.137-.575 0-.863-.488-.287-.487-.062-.912.375-.725 1.075-1.162Q9.125 7 10 7h4q1.25 0 2.125.875T17 10v4q.425 0 .712-.288Q18 13.425 18 13V9q0-1.25.875-2.125T21 6q.425 0 .712.287Q22 6.575 22 7t-.288.713Q21.425 8 21 8t-.712.287Q20 8.575 20 9v4q0 1.25-.875 2.125T17 16v1q0 .425-.288.712Q16.425 18 16 18Z"/>
    </Icon>
  );
});

IconMaterialIronFilled.displayName = 'AmauiIconMaterialIronFilled';

export default IconMaterialIronFilled;
