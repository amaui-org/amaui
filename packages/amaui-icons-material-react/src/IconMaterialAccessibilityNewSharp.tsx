import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilityNewSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewSharp'
      short_name='AccessibilityNew'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM9 22V9Q7.5 8.875 5.95 8.625Q4.4 8.375 3 8L3.5 6Q5.45 6.525 7.65 6.762Q9.85 7 12 7Q14.15 7 16.35 6.762Q18.55 6.525 20.5 6L21 8Q19.6 8.375 18.05 8.625Q16.5 8.875 15 9V22H13V16H11V22Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewSharp.displayName = 'AmauiIconMaterialAccessibilityNewSharp';

export default IconMaterialAccessibilityNewSharp;
