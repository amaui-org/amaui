import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnalyticsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsW100Filled'

      short_name='Analytics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm3.65-3.35h.7V12h-.7Zm7.4 0h.7V7h-.7Zm-3.7 0h.7V14h-.7Zm0-4.35h.7v-2h-.7Z"/>
    </Icon>
  );
});

IconMaterialAnalyticsW100Filled.displayName = 'AmauiIconMaterialAnalyticsW100Filled';

export default IconMaterialAnalyticsW100Filled;
