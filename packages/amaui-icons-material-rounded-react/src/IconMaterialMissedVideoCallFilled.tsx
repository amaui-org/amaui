import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMissedVideoCallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallFilled'

      short_name='MissedVideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.7 13.15 8.5 11H9q.425 0 .713-.288Q10 10.425 10 10t-.287-.713Q9.425 9 9 9H6q-.425 0-.713.287Q5 9.575 5 10v3q0 .425.287.712Q5.575 14 6 14t.713-.288Q7 13.425 7 13v-.7l3 3q.125.125.312.2.188.075.388.075t.388-.075q.187-.075.312-.225l3.125-3.15q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275-.425 0-.7.275ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h12q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.225-.225.538-.113Q22 7.35 22 7.7v8.6q0 .35-.312.462-.313.113-.538-.112L18 13.5V18q0 .825-.587 1.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallFilled.displayName = 'AmauiIconMaterialMissedVideoCallFilled';

export default IconMaterialMissedVideoCallFilled;
