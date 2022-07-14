import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoTone'
      short_name='Looks'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11zm0 6c2.76 0 5 2.24 5 5h2c0-3.86-3.14-7-7-7s-7 3.14-7 7h2c0-2.76 2.24-5 5-5z"/>
    </Icon>
  );
});

export default IconMaterialLooksTwoTone;
