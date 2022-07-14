import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilityTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityTwoTone'
      short_name='Accessibility'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
    </Icon>
  );
});

export default IconMaterialAccessibilityTwoTone;
