import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2W100Filled'

      short_name='Filter2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14.35h4.7v-.7h-4v-3.3h4v-4.7H11v.7h4v3.3h-4ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialFilter2W100Filled.displayName = 'AmauiIconMaterialFilter2W100Filled';

export default IconMaterialFilter2W100Filled;
