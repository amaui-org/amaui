import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingFilled'

      short_name='CallMissedOutgoing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-.2 0-.375-.062-.175-.063-.325-.213l-7.6-7.6q-.275-.275-.287-.687-.013-.413.287-.713.275-.3.688-.313Q4.8 7.4 5.1 7.7l6.9 6.9L17.6 9H14q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h6q.425 0 .712.287Q21 7.575 21 8v6q0 .425-.288.712Q20.425 15 20 15t-.712-.288Q19 14.425 19 14v-3.575l-6.3 6.3q-.15.15-.325.213Q12.2 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoingFilled.displayName = 'AmauiIconMaterialCallMissedOutgoingFilled';

export default IconMaterialCallMissedOutgoingFilled;
