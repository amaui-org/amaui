import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveW100Filled'

      short_name='Remove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 12.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRemoveW100Filled.displayName = 'AmauiIconMaterialRemoveW100Filled';

export default IconMaterialRemoveW100Filled;
