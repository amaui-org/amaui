import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchAccountSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountSharpW100Filled'
      short_name='SwitchAccount'

      {...props}
    >
      <path d="M14 11.6Q14.975 11.6 15.663 10.912Q16.35 10.225 16.35 9.25Q16.35 8.275 15.663 7.587Q14.975 6.9 14 6.9Q13.025 6.9 12.338 7.587Q11.65 8.275 11.65 9.25Q11.65 10.225 12.338 10.912Q13.025 11.6 14 11.6ZM7.3 16.7V3.3H20.7V16.7ZM3.3 20.7V7.3H4V20H16.7V20.7ZM8.75 16H19.25Q18.1 14.775 16.763 14.238Q15.425 13.7 14 13.7Q12.575 13.7 11.238 14.238Q9.9 14.775 8.75 16Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountSharpW100Filled.displayName = 'AmauiIconMaterialSwitchAccountSharpW100Filled';

export default IconMaterialSwitchAccountSharpW100Filled;
