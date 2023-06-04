import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnalyticsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsW100'

      short_name='Analytics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm2.95-2.65h.7V12h-.7Zm7.4 0h.7V7h-.7Zm-3.7 0h.7V14h-.7Zm0-4.35h.7v-2h-.7ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialAnalyticsW100.displayName = 'AmauiIconMaterialAnalyticsW100';

export default IconMaterialAnalyticsW100;
