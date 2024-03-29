import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotAccessibleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleFilled'

      short_name='NotAccessible'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.9 12.9q-1.075-.2-2.1-.7-1.025-.5-1.8-1.15l-3.425-3.425q.25-.275.575-.438.325-.162.85-.162.375 0 .825.175.45.175.825.55l1.275 1.425q.6.65 1.438 1.125.837.475 1.787.625.375.05.613.325.237.275.237.625 0 .475-.337.787-.338.313-.763.238ZM12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm7.075 15.9-4.9-4.9H12q-.825 0-1.412-.587Q10 15.825 10 15v-2.175l-7.9-7.9q-.275-.275-.275-.688 0-.412.275-.712.3-.3.712-.3.413 0 .713.3L20.5 20.5q.3.3.288.7-.013.4-.313.7-.3.275-.7.288-.4.012-.7-.288ZM10 22q-2.075 0-3.537-1.462Q5 19.075 5 17q0-1.825 1.138-3.188Q7.275 12.45 9 12.1v2.075q-.875.325-1.438 1.087Q7 16.025 7 17q0 1.25.875 2.125T10 20q.975 0 1.75-.562.775-.563 1.075-1.438H14.9q-.35 1.725-1.712 2.863Q11.825 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleFilled.displayName = 'AmauiIconMaterialNotAccessibleFilled';

export default IconMaterialNotAccessibleFilled;
