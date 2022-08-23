import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStickyNote2SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2SharpFilled'
      short_name='StickyNote2'

      {...props}
    >
      <path d="M3 21V3H21V15L15 21ZM7 14H12V12H7ZM7 10H17V8H7ZM14 19 19 14H14Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2SharpFilled.displayName = 'AmauiIconMaterialStickyNote2SharpFilled';

export default IconMaterialStickyNote2SharpFilled;
