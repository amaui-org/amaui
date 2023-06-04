import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCompactW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactW100'

      short_name='ViewCompact'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.25 18.65V5.35h17.5v13.3Zm.7-9.1h3.5v-3.5h-3.5Zm4.2 0h3.5v-3.5h-3.5Zm4.2 0h3.5v-3.5h-3.5Zm4.2 0h3.5v-3.5h-3.5Zm0 4.2h3.5v-3.5h-3.5Zm-4.2 0h3.5v-3.5h-3.5Zm-4.2 0h3.5v-3.5h-3.5Zm-.7-3.5h-3.5v3.5h3.5Zm9.1 7.7h3.5v-3.5h-3.5Zm-4.2 0h3.5v-3.5h-3.5Zm-4.2 0h3.5v-3.5h-3.5Zm-4.2 0h3.5v-3.5h-3.5Z"/>
    </Icon>
  );
});

IconMaterialViewCompactW100.displayName = 'AmauiIconMaterialViewCompactW100';

export default IconMaterialViewCompactW100;
