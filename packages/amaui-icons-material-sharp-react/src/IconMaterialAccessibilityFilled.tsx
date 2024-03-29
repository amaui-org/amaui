import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibilityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityFilled'

      short_name='Accessibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6ZM9 22V9H3V7h18v2h-6v13h-2v-6h-2v6Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityFilled.displayName = 'AmauiIconMaterialAccessibilityFilled';

export default IconMaterialAccessibilityFilled;
