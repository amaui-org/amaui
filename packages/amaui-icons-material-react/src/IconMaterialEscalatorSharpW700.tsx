import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorSharpW700'
      short_name='Escalator'

      {...props}
    >
      <path d="M6.075 17.65H10.5L15.1 9.35H17.925V6.35H13.5L8.9 14.65H6.075ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialEscalatorSharpW700;
