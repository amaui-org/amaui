import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabSharpW700'
      short_name='Tab'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM19.7 17.7V10H13V6.3H4.3V17.7ZM4.3 17.7V6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialTabSharpW700;
