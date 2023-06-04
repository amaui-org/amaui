import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageW100Filled'

      short_name='RequestPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 17.35h.7v-1h2v-3.7h-4v-2.3h4v-.7h-2v-1h-.7v1h-2v3.7h4v2.3h-4v.7h2ZM5.3 20.7V3.3h8.15l5.25 5.25V20.7Z"/>
    </Icon>
  );
});

IconMaterialRequestPageW100Filled.displayName = 'AmauiIconMaterialRequestPageW100Filled';

export default IconMaterialRequestPageW100Filled;
