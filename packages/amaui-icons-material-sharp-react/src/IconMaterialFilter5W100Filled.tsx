import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5W100Filled'

      short_name='Filter5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14.35h4.7v-4.7h-4v-3.3h4v-.7H11v4.7h4v3.3h-4ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialFilter5W100Filled.displayName = 'AmauiIconMaterialFilter5W100Filled';

export default IconMaterialFilter5W100Filled;
