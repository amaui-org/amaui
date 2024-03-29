import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibilityNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNew'

      short_name='AccessibilityNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6ZM9 22V9q-1.5-.125-3.05-.375Q4.4 8.375 3 8l.5-2q1.95.525 4.15.762Q9.85 7 12 7q2.15 0 4.35-.238 2.2-.237 4.15-.762l.5 2q-1.4.375-2.95.625Q16.5 8.875 15 9v13h-2v-6h-2v6Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNew.displayName = 'AmauiIconMaterialAccessibilityNew';

export default IconMaterialAccessibilityNew;
