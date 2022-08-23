import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserSharpW100'
      short_name='OpenInBrowser'

      {...props}
    >
      <path d="M11.65 19.7V13.35L9.4 15.6L8.9 15.1L12 12L15.1 15.1L14.6 15.6L12.35 13.35V19.7ZM4.3 19.7V4.3H19.7V19.7H15.35V19H19V7H5V19H8.65V19.7Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserSharpW100.displayName = 'AmauiIconMaterialOpenInBrowserSharpW100';

export default IconMaterialOpenInBrowserSharpW100;
