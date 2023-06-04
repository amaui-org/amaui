import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter3W100Filled'

      short_name='Filter3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14.35h4.7v-8.7H11v.7h4v3.3h-2.5v.7H15v3.3h-4ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialFilter3W100Filled.displayName = 'AmauiIconMaterialFilter3W100Filled';

export default IconMaterialFilter3W100Filled;
