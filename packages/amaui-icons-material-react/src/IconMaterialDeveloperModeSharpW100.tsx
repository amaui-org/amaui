import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeveloperModeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeSharpW100'
      short_name='DeveloperMode'

      {...props}
    >
      <path d="M7 21H17V19.35H7ZM7 4.65H17V3H7ZM6.3 7V2.3H17.7V7H17V5.35H7V7ZM6.3 21.7V17H7V18.65H17V17H17.7V21.7ZM15.4 15.65 14.9 15.15 18.05 12 14.9 8.85 15.4 8.35 19.05 12ZM8.6 15.65 4.95 12 8.6 8.35 9.1 8.85 5.95 12 9.1 15.15ZM7 4.65V3V4.65ZM7 21V19.35V21Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeSharpW100.displayName = 'AmauiIconMaterialDeveloperModeSharpW100';

export default IconMaterialDeveloperModeSharpW100;
