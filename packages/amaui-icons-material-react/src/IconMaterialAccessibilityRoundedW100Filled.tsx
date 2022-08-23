import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilityRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityRoundedW100Filled'
      short_name='Accessibility'

      {...props}
    >
      <path d="M12 5.7Q11.35 5.7 10.875 5.225Q10.4 4.75 10.4 4.1Q10.4 3.45 10.875 2.975Q11.35 2.5 12 2.5Q12.65 2.5 13.125 2.975Q13.6 3.45 13.6 4.1Q13.6 4.75 13.125 5.225Q12.65 5.7 12 5.7ZM10.4 21.35Q10.25 21.35 10.15 21.25Q10.05 21.15 10.05 21V8.25H4.6Q4.45 8.25 4.35 8.15Q4.25 8.05 4.25 7.9Q4.25 7.75 4.35 7.65Q4.45 7.55 4.6 7.55H19.4Q19.55 7.55 19.65 7.65Q19.75 7.75 19.75 7.9Q19.75 8.05 19.65 8.15Q19.55 8.25 19.4 8.25H13.95V21Q13.95 21.15 13.85 21.25Q13.75 21.35 13.6 21.35Q13.45 21.35 13.35 21.25Q13.25 21.15 13.25 21V16H10.75V21Q10.75 21.15 10.65 21.25Q10.55 21.35 10.4 21.35Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityRoundedW100Filled.displayName = 'AmauiIconMaterialAccessibilityRoundedW100Filled';

export default IconMaterialAccessibilityRoundedW100Filled;
