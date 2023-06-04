import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationAutomationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAutomationW100'

      short_name='LocationAutomation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 17.7V7.65L12 2.575l6.7 5.075v4H18V8l-6-4.55L6 8v9h6.65v.7Zm13.2 2.725-.9-2.025-2.025-.9 2.025-.9.9-2.025.9 2.025 2.025.9-2.025.9Z"/>
    </Icon>
  );
});

IconMaterialLocationAutomationW100.displayName = 'AmauiIconMaterialLocationAutomationW100';

export default IconMaterialLocationAutomationW100;
