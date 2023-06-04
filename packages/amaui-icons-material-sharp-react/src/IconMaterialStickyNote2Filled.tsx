import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNote2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2Filled'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v12l-6 6Zm4-7h5v-2H7Zm0-4h10V8H7Zm7 9 5-5h-5Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2Filled.displayName = 'AmauiIconMaterialStickyNote2Filled';

export default IconMaterialStickyNote2Filled;
