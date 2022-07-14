import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabSharpW100Filled'
      short_name='Tab'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM13 10H20V6H13Z"/>
    </Icon>
  );
});

export default IconMaterialTabSharpW100Filled;
