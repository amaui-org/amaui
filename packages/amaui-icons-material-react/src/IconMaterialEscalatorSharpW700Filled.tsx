import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorSharpW700Filled'
      short_name='Escalator'

      {...props}
    >
      <path d="M6.075 17.65H10.5L15.1 9.35H17.925V6.35H13.5L8.9 14.65H6.075ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialEscalatorSharpW700Filled;
