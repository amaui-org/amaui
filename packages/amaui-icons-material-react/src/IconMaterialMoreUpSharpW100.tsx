import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreUpSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUpSharpW100'
      short_name='MoreUp'

      {...props}
    >
      <path d="M17.65 15.4V6.35H9.3v-.7h9.05v9.75Zm-5 5v-9.05H4.3v-.7h9.05v9.75Z"/>
    </Icon>
  );
});

IconMaterialMoreUpSharpW100.displayName = 'AmauiIconMaterialMoreUpSharpW100';

export default IconMaterialMoreUpSharpW100;
