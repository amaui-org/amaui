import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationAutomationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAutomationFilled'

      short_name='LocationAutomation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19V7l8-6 8 6v4h-2V8l-6-4.5L6 8v9h6v2Zm14.5 3-1.4-3.1-3.1-1.4 3.1-1.4 1.4-3.1 1.4 3.1 3.1 1.4-3.1 1.4Z"/>
    </Icon>
  );
});

IconMaterialLocationAutomationFilled.displayName = 'AmauiIconMaterialLocationAutomationFilled';

export default IconMaterialLocationAutomationFilled;
