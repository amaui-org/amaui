import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilitySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilitySharpW100'
      short_name='Accessibility'

      {...props}
    >
      <path d="M12 5.7Q11.35 5.7 10.875 5.225Q10.4 4.75 10.4 4.1Q10.4 3.45 10.875 2.975Q11.35 2.5 12 2.5Q12.65 2.5 13.125 2.975Q13.6 3.45 13.6 4.1Q13.6 4.75 13.125 5.225Q12.65 5.7 12 5.7ZM10.05 21.35V8.25H4.25V7.55H19.75V8.25H13.95V21.35H13.25V16H10.75V21.35Z"/>
    </Icon>
  );
});

IconMaterialAccessibilitySharpW100.displayName = 'AmauiIconMaterialAccessibilitySharpW100';

export default IconMaterialAccessibilitySharpW100;
