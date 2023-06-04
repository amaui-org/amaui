import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNote2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2W100Filled'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v9.775L14.075 19.7Zm3.85-6.4H12v-.7H8.15Zm0-3.95h7.7v-.7h-7.7ZM14 19l5-5h-5Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2W100Filled.displayName = 'AmauiIconMaterialStickyNote2W100Filled';

export default IconMaterialStickyNote2W100Filled;
