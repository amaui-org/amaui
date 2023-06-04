import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListW100Filled'

      short_name='FilterList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-7-11q-.15 0-.25-.1T3.65 6q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3 5.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFilterListW100Filled.displayName = 'AmauiIconMaterialFilterListW100Filled';

export default IconMaterialFilterListW100Filled;
