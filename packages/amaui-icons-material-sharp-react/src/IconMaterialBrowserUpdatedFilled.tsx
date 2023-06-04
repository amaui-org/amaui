import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowserUpdatedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdatedFilled'

      short_name='BrowserUpdated'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-2l1-1H2V3h10v2H4v11h16v-3h2v5h-5l1 1v2Zm9-6-5-5 1.4-1.4 2.6 2.575V3h2v8.175L18.6 8.6 20 10Z"/>
    </Icon>
  );
});

IconMaterialBrowserUpdatedFilled.displayName = 'AmauiIconMaterialBrowserUpdatedFilled';

export default IconMaterialBrowserUpdatedFilled;
