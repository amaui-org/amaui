import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilityOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityOutlined'
      short_name='Accessibility'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM9 22V9H3V7H21V9H15V22H13V16H11V22Z"/>
    </Icon>
  )
});

export default IconMaterialAccessibilityOutlined;
