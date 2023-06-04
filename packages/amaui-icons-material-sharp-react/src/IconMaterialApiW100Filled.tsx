import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiW100Filled'

      short_name='Api'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 14-2-2 2-2 2 2ZM9.875 8.575l-1.45-1.45L12 3.55l3.575 3.575-1.45 1.45L12 6.45Zm-2.75 7L3.55 12l3.575-3.575 1.45 1.45L6.45 12l2.125 2.125Zm9.75 0-1.45-1.45L17.55 12l-2.125-2.125 1.45-1.45L20.45 12ZM12 20.45l-3.575-3.575 1.45-1.45L12 17.55l2.125-2.125 1.45 1.45Z"/>
    </Icon>
  );
});

IconMaterialApiW100Filled.displayName = 'AmauiIconMaterialApiW100Filled';

export default IconMaterialApiW100Filled;
