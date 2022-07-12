import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactSharpW700'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM19.7 11V6.3H4.3V11ZM10.075 17.7H19.7V13H10.075ZM4.3 17.7H8.075V13H4.3Z"/>
    </Icon>
  )
});

export default IconMaterialViewCompactSharpW700;
