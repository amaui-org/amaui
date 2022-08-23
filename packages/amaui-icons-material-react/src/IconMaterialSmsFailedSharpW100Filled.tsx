import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsFailedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedSharpW100Filled'
      short_name='SmsFailed'

      {...props}
    >
      <path d="M11.65 11.6H12.35V5.5H11.65ZM12 14.25Q12.225 14.25 12.363 14.1Q12.5 13.95 12.5 13.75Q12.5 13.525 12.363 13.387Q12.225 13.25 12 13.25Q11.8 13.25 11.65 13.387Q11.5 13.525 11.5 13.75Q11.5 13.95 11.65 14.1Q11.8 14.25 12 14.25ZM3.3 19.5V3.3H20.7V16.7H6.1Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedSharpW100Filled.displayName = 'AmauiIconMaterialSmsFailedSharpW100Filled';

export default IconMaterialSmsFailedSharpW100Filled;
