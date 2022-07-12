import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultSharpW700'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M5.3 18.7H18.7V5.3H5.3ZM2.15 21.85V2.15H21.85V21.85ZM8.4 17.275 12 13.675 15.6 17.275 17.275 15.6 13.675 12 17.275 8.4 15.6 6.725 12 10.325 8.4 6.725 6.725 8.4 10.325 12 6.725 15.6ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialDisabledByDefaultSharpW700;
