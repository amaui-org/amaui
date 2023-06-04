import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddW100Filled'

      short_name='Add'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.35q-.15 0-.25-.1t-.1-.25v-5.65H6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.65V6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5.65H18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-5.65V18q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddW100Filled.displayName = 'AmauiIconMaterialAddW100Filled';

export default IconMaterialAddW100Filled;
