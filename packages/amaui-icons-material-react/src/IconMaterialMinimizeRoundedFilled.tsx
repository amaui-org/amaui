import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeRoundedFilled'
      short_name='Minimize'

      {...props}
    >
      <path d="M6.975 21Q6.55 21 6.275 20.712Q6 20.425 6 20Q6 19.575 6.287 19.288Q6.575 19 7 19H17.025Q17.45 19 17.725 19.288Q18 19.575 18 20Q18 20.425 17.712 20.712Q17.425 21 17 21Z"/>
    </Icon>
  );
});

export default IconMaterialMinimizeRoundedFilled;
