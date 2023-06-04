import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeW100'

      short_name='Home'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.6l6.7 5.05V19.7h-4.9v-6.25h-3.6v6.25ZM6 19h3.5v-6.25h5V19H18v-9l-6-4.5L6 10Zm6-6.75Z"/>
    </Icon>
  );
});

IconMaterialHomeW100.displayName = 'AmauiIconMaterialHomeW100';

export default IconMaterialHomeW100;
