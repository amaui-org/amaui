import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWineBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBar'

      short_name='WineBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-2h3v-4.1q-2.15-.35-3.575-2Q6 11.25 6 9V3h12v6q0 2.25-1.425 3.9T13 14.9V19h3v2Zm4-8q1.4 0 2.45-.85 1.05-.85 1.4-2.15h-7.7q.35 1.3 1.4 2.15Q10.6 13 12 13ZM8 8h8V5H8Zm4 5Z"/>
    </Icon>
  );
});

IconMaterialWineBar.displayName = 'AmauiIconMaterialWineBar';

export default IconMaterialWineBar;
