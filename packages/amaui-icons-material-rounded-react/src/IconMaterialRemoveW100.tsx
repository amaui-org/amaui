import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveW100'

      short_name='Remove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 12.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRemoveW100.displayName = 'AmauiIconMaterialRemoveW100';

export default IconMaterialRemoveW100;
