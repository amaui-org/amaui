import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxFilled'

      short_name='MarkunreadMailbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V10q0-.825.588-1.413Q3.175 8 4 8h2V3q0-.425.287-.713Q6.575 2 7 2h6q.425 0 .713.287Q14 2.575 14 3v2q0 .425-.287.713Q13.425 6 13 6H8v7q0 .425.288.712Q8.575 14 9 14t.713-.288Q10 13.425 10 13V8h10q.825 0 1.413.587Q22 9.175 22 10v10q0 .825-.587 1.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxFilled.displayName = 'AmauiIconMaterialMarkunreadMailboxFilled';

export default IconMaterialMarkunreadMailboxFilled;
