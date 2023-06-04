import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeW100'

      short_name='DeveloperMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21h10v-1.65H7ZM7 4.65h10V3H7ZM6.3 7V2.3h11.4V7H17V5.35H7V7Zm0 14.7V17H7v1.65h10V17h.7v4.7Zm9.1-6.05-.5-.5L18.05 12 14.9 8.85l.5-.5L19.05 12Zm-6.8 0L4.95 12 8.6 8.35l.5.5L5.95 12l3.15 3.15ZM7 4.65V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeW100.displayName = 'AmauiIconMaterialDeveloperModeW100';

export default IconMaterialDeveloperModeW100;
