import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksTwoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoW100Filled'

      short_name='LooksTwo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 16.35h4.7v-.7h-4v-3.3h4v-4.7h-4.7v.7h4v3.3h-4ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialLooksTwoW100Filled.displayName = 'AmauiIconMaterialLooksTwoW100Filled';

export default IconMaterialLooksTwoW100Filled;
