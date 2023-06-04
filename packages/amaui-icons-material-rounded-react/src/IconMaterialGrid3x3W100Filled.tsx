import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid3x3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3W100Filled'

      short_name='Grid3x3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 18.7q-.15 0-.25-.1t-.1-.25V14.7H5.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9.3v-4H5.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9.3V5.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V9.3h4V5.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V9.3h3.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H14.7v4h3.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H14.7v3.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V14.7h-4v3.65q0 .15-.1.25t-.25.1ZM10 14h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3W100Filled.displayName = 'AmauiIconMaterialGrid3x3W100Filled';

export default IconMaterialGrid3x3W100Filled;
