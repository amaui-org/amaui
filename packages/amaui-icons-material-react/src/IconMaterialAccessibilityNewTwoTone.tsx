import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilityNewTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewTwoTone'
      short_name='AccessibilityNew'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewTwoTone.displayName = 'AmauiIconMaterialAccessibilityNewTwoTone';

export default IconMaterialAccessibilityNewTwoTone;
