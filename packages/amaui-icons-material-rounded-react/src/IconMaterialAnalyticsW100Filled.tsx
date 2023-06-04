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
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm2.5-3.35q.15 0 .25-.1t.1-.25v-3.65q0-.15-.1-.25T8.3 12q-.15 0-.25.1t-.1.25V16q0 .15.1.25t.25.1Zm7.4 0q.15 0 .25-.1t.1-.25V7.35q0-.15-.1-.25T15.7 7q-.15 0-.25.1t-.1.25V16q0 .15.1.25t.25.1Zm-3.7 0q.15 0 .25-.1t.1-.25v-1.65q0-.15-.1-.25T12 14q-.15 0-.25.1t-.1.25V16q0 .15.1.25t.25.1ZM12 12q.15 0 .25-.1t.1-.25v-1.325q0-.125-.1-.225T12 10q-.15 0-.25.1t-.1.25v1.325q0 .125.1.225t.25.1Z"/>
    </Icon>
  );
});

IconMaterialAnalyticsW100Filled.displayName = 'AmauiIconMaterialAnalyticsW100Filled';

export default IconMaterialAnalyticsW100Filled;
