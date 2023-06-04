import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeW100Filled'

      short_name='Home'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.6l6.7 5.05V19.7h-4.9v-6.25h-3.6v6.25Z"/>
    </Icon>
  );
});

IconMaterialHomeW100Filled.displayName = 'AmauiIconMaterialHomeW100Filled';

export default IconMaterialHomeW100Filled;
