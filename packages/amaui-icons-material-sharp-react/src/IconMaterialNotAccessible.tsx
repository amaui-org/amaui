import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotAccessible = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessible'

      short_name='NotAccessible'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 13q-1.325 0-2.675-.575-1.35-.575-2.325-1.375l-3.425-3.425q.25-.275.575-.438.325-.162.85-.162.375 0 .825.175.45.175.825.55l1.275 1.425q.725.8 1.813 1.325 1.087.525 2.262.5Zm-7-7q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm7.775 16.6-5.6-5.6H12q-.825 0-1.412-.587Q10 15.825 10 15v-2.175l-8.6-8.6L2.8 2.8l18.4 18.4ZM10 22q-2.075 0-3.537-1.462Q5 19.075 5 17q0-1.825 1.138-3.188Q7.275 12.45 9 12.1v2.075q-.875.325-1.438 1.087Q7 16.025 7 17q0 1.25.875 2.125T10 20q.975 0 1.75-.562.775-.563 1.075-1.438H14.9q-.35 1.725-1.712 2.863Q11.825 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialNotAccessible.displayName = 'AmauiIconMaterialNotAccessible';

export default IconMaterialNotAccessible;
