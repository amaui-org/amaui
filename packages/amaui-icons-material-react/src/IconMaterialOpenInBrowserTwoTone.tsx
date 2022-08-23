import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserTwoTone'
      short_name='OpenInBrowser'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserTwoTone.displayName = 'AmauiIconMaterialOpenInBrowserTwoTone';

export default IconMaterialOpenInBrowserTwoTone;
