import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSharpW700'
      short_name='Delete'

      {...props}
    >
      <path d="M3.575 21.85V6.275H2V3.125H8.425V1.55H15.525V3.125H22V6.275H20.425V21.85ZM6.725 18.7H17.275V6.275H6.725ZM8.55 16.975H11.125V7.975H8.55ZM12.875 16.975H15.45V7.975H12.875ZM6.725 6.275V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialDeleteSharpW700;
