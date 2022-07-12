import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeRoundedW700Filled'
      short_name='Minimize'

      {...props}
    >
      <path d="M6.975 21.575Q6.325 21.575 5.875 21.112Q5.425 20.65 5.425 20Q5.425 19.35 5.888 18.888Q6.35 18.425 7 18.425H17.025Q17.675 18.425 18.125 18.888Q18.575 19.35 18.575 20Q18.575 20.65 18.113 21.112Q17.65 21.575 17 21.575Z"/>
    </Icon>
  )
});

export default IconMaterialMinimizeRoundedW700Filled;
