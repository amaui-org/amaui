import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClearAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllW100Filled'

      short_name='ClearAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 12.35H6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-2 4H4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm4-8H8q-.15 0-.25-.1T7.65 8q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialClearAllW100Filled.displayName = 'AmauiIconMaterialClearAllW100Filled';

export default IconMaterialClearAllW100Filled;
