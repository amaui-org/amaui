import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInBrowser = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowser'

      short_name='OpenInBrowser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21v-6.15l-1.6 1.6L8 15l4-4 4 4-1.4 1.45-1.6-1.6V21Zm-8 0V3h18v18h-6v-2h4V7H5v12h4v2Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowser.displayName = 'AmauiIconMaterialOpenInBrowser';

export default IconMaterialOpenInBrowser;
