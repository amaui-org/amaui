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
      <path d="M12 5.7q-.65 0-1.125-.475T10.4 4.1q0-.65.475-1.125T12 2.5q.65 0 1.125.475T13.6 4.1q0 .65-.475 1.125T12 5.7Zm-1.95 15.65V8.25h-5.8v-.7h15.5v.7h-5.8v13.1h-.7V16h-2.5v5.35Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityW100.displayName = 'AmauiIconMaterialAccessibilityW100';

export default IconMaterialAccessibilityW100;
