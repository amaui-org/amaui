import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWineBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarFilled'

      short_name='WineBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-2h3v-4.1q-2.15-.35-3.575-2Q6 11.25 6 9V3h12v6q0 2.25-1.425 3.9T13 14.9V19h3v2ZM8 8h8V5H8Z"/>
    </Icon>
  );
});

IconMaterialWineBarFilled.displayName = 'AmauiIconMaterialWineBarFilled';

export default IconMaterialWineBarFilled;
