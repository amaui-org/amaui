import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadW100Filled'

      short_name='MarkAsUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.975 16.2V6.675l7.85-3.925 7.7 3.85v.55h-.45l-7.25-3.6-7.15 3.55v9.1Zm3.65 3.5V9.3h14.4v10.4Zm7.2-5.55 6.5-3.35V10l-6.5 3.35-6.5-3.35v.8Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadW100Filled.displayName = 'AmauiIconMaterialMarkAsUnreadW100Filled';

export default IconMaterialMarkAsUnreadW100Filled;
