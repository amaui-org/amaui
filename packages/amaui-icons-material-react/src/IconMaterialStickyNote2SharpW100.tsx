import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStickyNote2SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2SharpW100'
      short_name='StickyNote2'

      {...props}
    >
      <path d="M14 14H19V5H5V19H14ZM4.3 19.7V4.3H19.7V14.075L14.075 19.7ZM8.15 13.3V12.6H12V13.3ZM8.15 9.35V8.65H15.85V9.35ZM5 19V14V5V19Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2SharpW100.displayName = 'AmauiIconMaterialStickyNote2SharpW100';

export default IconMaterialStickyNote2SharpW100;
