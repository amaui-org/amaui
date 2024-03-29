import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperMode'

      short_name='DeveloperMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21h10v-1H7ZM7 4h10V3H7ZM5 7V1h14v6h-2V6H7v1Zm0 16v-6h2v1h10v-1h2v6Zm10.4-6.4L14 15.15 17.15 12 14 8.85l1.4-1.45L20 12Zm-6.8 0L4 12l4.6-4.6L10 8.85 6.85 12 10 15.15ZM7 4V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialDeveloperMode.displayName = 'AmauiIconMaterialDeveloperMode';

export default IconMaterialDeveloperMode;
