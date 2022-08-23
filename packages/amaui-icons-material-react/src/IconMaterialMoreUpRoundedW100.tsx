import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreUpRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUpRoundedW100'
      short_name='MoreUp'

      {...props}
    >
      <path d="M17.65 15.4V6.35H9.3v-.7h9.05v9.75Zm-5 5v-9.05H4.3v-.7h9.05v9.75Z"/>
    </Icon>
  );
});

IconMaterialMoreUpRoundedW100.displayName = 'AmauiIconMaterialMoreUpRoundedW100';

export default IconMaterialMoreUpRoundedW100;
