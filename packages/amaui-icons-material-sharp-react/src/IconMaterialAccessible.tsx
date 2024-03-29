import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessible = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Accessible'

      short_name='Accessible'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm5 16v-5h-7V9q0-.875.562-1.438Q11.125 7 12 7q.6 0 1.038.262.437.263.937.838 1.375 1.65 2.487 2.263 1.113.612 2.538.637v2q-1.325 0-2.675-.575-1.35-.575-2.325-1.375v3.45h5V22Zm-7 0q-2.075 0-3.537-1.462Q5 19.075 5 17q0-1.8 1.138-3.175Q7.275 12.45 9 12.1v2.05q-.875.35-1.438 1.112Q7 16.025 7 17q0 1.25.875 2.125T10 20q.975 0 1.738-.562.762-.563 1.112-1.438h2.05q-.35 1.725-1.725 2.863Q11.8 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialAccessible.displayName = 'AmauiIconMaterialAccessible';

export default IconMaterialAccessible;
