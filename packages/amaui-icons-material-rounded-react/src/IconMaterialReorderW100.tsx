import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReorderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderW100'

      short_name='Reorder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 14.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1T3.65 6q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialReorderW100.displayName = 'AmauiIconMaterialReorderW100';

export default IconMaterialReorderW100;
