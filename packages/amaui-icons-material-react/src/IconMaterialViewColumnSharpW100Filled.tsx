import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnSharpW100Filled'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M15.025 17.7V6.3H19.7V17.7ZM9.675 17.7V6.3H14.325V17.7ZM4.3 17.7V6.3H8.975V17.7Z"/>
    </Icon>
  );
});

IconMaterialViewColumnSharpW100Filled.displayName = 'AmauiIconMaterialViewColumnSharpW100Filled';

export default IconMaterialViewColumnSharpW100Filled;
