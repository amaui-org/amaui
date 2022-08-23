import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks4SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4SharpW100Filled'
      short_name='Looks4'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM13.65 16.35H14.35V7.65H13.65V11.65H10.35V7.65H9.65V12.35H13.65Z"/>
    </Icon>
  );
});

IconMaterialLooks4SharpW100Filled.displayName = 'AmauiIconMaterialLooks4SharpW100Filled';

export default IconMaterialLooks4SharpW100Filled;
