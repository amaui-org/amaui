import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowserUpdatedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdatedSharp'
      short_name='BrowserUpdated'

      {...props}
    >
      <path d="M6 21V19L7 18H2V3H12V5H4V16H20V13H22V18H17L18 19V21ZM15 15 10 10 11.4 8.6 14 11.175V3H16V11.175L18.6 8.6L20 10Z"/>
    </Icon>
  );
});

IconMaterialBrowserUpdatedSharp.displayName = 'AmauiIconMaterialBrowserUpdatedSharp';

export default IconMaterialBrowserUpdatedSharp;
