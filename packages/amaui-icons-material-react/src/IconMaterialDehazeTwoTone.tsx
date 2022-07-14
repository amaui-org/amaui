import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDehazeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeTwoTone'
      short_name='Dehaze'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/>
    </Icon>
  );
});

export default IconMaterialDehazeTwoTone;
