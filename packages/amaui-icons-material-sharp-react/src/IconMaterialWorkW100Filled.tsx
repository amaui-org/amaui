import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkW100Filled'

      short_name='Work'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V7.3h6V4.6h5.4v2.7h6v12.4ZM10 7.3h4v-2h-4Z"/>
    </Icon>
  );
});

IconMaterialWorkW100Filled.displayName = 'AmauiIconMaterialWorkW100Filled';

export default IconMaterialWorkW100Filled;
