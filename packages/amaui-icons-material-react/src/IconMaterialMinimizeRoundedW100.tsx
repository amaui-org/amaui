import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeRoundedW100'
      short_name='Minimize'

      {...props}
    >
      <path d="M6.975 20.35Q6.85 20.35 6.75 20.25Q6.65 20.15 6.65 20Q6.65 19.85 6.75 19.75Q6.85 19.65 7 19.65H17.025Q17.15 19.65 17.25 19.75Q17.35 19.85 17.35 20Q17.35 20.15 17.25 20.25Q17.15 20.35 17 20.35Z"/>
    </Icon>
  );
});

export default IconMaterialMinimizeRoundedW100;
