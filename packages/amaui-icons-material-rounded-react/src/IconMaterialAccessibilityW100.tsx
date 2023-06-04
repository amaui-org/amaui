import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibilityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityW100'

      short_name='Accessibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.7q-.65 0-1.125-.475T10.4 4.1q0-.65.475-1.125T12 2.5q.65 0 1.125.475T13.6 4.1q0 .65-.475 1.125T12 5.7Zm-1.6 15.65q-.15 0-.25-.1t-.1-.25V8.25H4.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-5.45V21q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5h-2.5v5q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityW100.displayName = 'AmauiIconMaterialAccessibilityW100';

export default IconMaterialAccessibilityW100;
