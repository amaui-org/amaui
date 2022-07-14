import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactSharpW100Filled'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M3.3 11.65V5.3H20.7V11.65ZM9.2 18.7V12.35H20.7V18.7ZM3.3 18.7V12.35H8.5V18.7Z"/>
    </Icon>
  );
});

export default IconMaterialViewCompactSharpW100Filled;
