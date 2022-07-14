import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnSharpW100'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M4.3 17.7V6.3H19.7V17.7ZM5 17H9.2V7H5ZM9.9 17H14.1V7H9.9ZM14.8 17H19V7H14.8Z"/>
    </Icon>
  );
});

export default IconMaterialViewColumnSharpW100;
