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
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm6 16q-.425 0-.712-.288Q17 21.425 17 21v-4h-5q-.825 0-1.412-.587Q10 15.825 10 15V9q0-.875.562-1.438Q11.125 7 12 7q.6 0 1.038.262.437.263.937.838 1.15 1.4 2.1 2.025.95.625 2.05.8.375.05.625.325t.25.65q0 .475-.325.775-.325.3-.75.225-1.075-.2-2.113-.712-1.037-.513-1.812-1.138v3.45h3q.825 0 1.413.587.587.588.587 1.413V21q0 .425-.288.712Q18.425 22 18 22Zm-8 0q-2.075 0-3.537-1.462Q5 19.075 5 17q0-1.8 1.138-3.175Q7.275 12.45 9 12.1v2.05q-.875.35-1.438 1.112Q7 16.025 7 17q0 1.25.875 2.125T10 20q.975 0 1.738-.562.762-.563 1.112-1.438h2.05q-.35 1.725-1.725 2.863Q11.8 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialAccessible.displayName = 'AmauiIconMaterialAccessible';

export default IconMaterialAccessible;
