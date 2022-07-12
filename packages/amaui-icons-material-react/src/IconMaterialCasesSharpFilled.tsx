import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCasesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesSharpFilled'
      short_name='Cases'

      {...props}
    >
      <path d="M1 22V9H3V20H20V22ZM5 18V5H10V1H18V5H23V18ZM12 5H16V3H12Z"/>
    </Icon>
  )
});

export default IconMaterialCasesSharpFilled;
