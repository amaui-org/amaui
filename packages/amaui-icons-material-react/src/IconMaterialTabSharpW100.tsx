import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabSharpW100'
      short_name='Tab'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM20 18V10H13V6H4V18ZM4 18V6V18Z"/>
    </Icon>
  );
});

export default IconMaterialTabSharpW100;
