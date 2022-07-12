import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOutlinedW700Filled'
      short_name='Power'

      {...props}
    >
      <path d="M8.35 21.85V18.05L5.15 14.85V9.3Q5.15 8.15 5.775 7.287Q6.4 6.425 7.5 6.225V6.15V2.15H10.65V6.15H13.35V2.15H16.5V6.15V6.225Q17.6 6.425 18.225 7.275Q18.85 8.125 18.85 9.3V14.85L15.65 18.05V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOutlinedW700Filled;
