import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowserUpdatedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdatedW100'

      short_name='BrowserUpdated'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 19.7v-1.15l1.85-1.85H3.3V4.3h9.275V5H4v11h16v-3h.7v3.7h-6.85l1.85 1.85v1.15Zm7.625-5.625L11.85 10l.5-.5 3.225 3.25V4.3h.7v8.45L19.5 9.5l.5.5Z"/>
    </Icon>
  );
});

IconMaterialBrowserUpdatedW100.displayName = 'AmauiIconMaterialBrowserUpdatedW100';

export default IconMaterialBrowserUpdatedW100;
