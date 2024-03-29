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
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm-2 16q-.425 0-.712-.288Q9 21.425 9 21V9H4q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7h16q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9h-5v12q0 .425-.287.712Q14.425 22 14 22t-.712-.288Q13 21.425 13 21v-5h-2v5q0 .425-.287.712Q10.425 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityFilled.displayName = 'AmauiIconMaterialAccessibilityFilled';

export default IconMaterialAccessibilityFilled;
