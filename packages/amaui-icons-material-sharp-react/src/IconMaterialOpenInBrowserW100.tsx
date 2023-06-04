import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserW100'

      short_name='OpenInBrowser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19.7v-6.35L9.4 15.6l-.5-.5L12 12l3.1 3.1-.5.5-2.25-2.25v6.35Zm-7.35 0V4.3h15.4v15.4h-4.35V19H19V7H5v12h3.65v.7Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserW100.displayName = 'AmauiIconMaterialOpenInBrowserW100';

export default IconMaterialOpenInBrowserW100;
