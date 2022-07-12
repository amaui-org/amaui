import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteRoundedW700Filled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M7.725 15.85Q7.075 15.85 6.613 15.387Q6.15 14.925 6.15 14.275V9.725Q6.15 9.075 6.613 8.612Q7.075 8.15 7.725 8.15H10.65L14.175 4.65Q14.925 3.9 15.888 4.312Q16.85 4.725 16.85 5.775V18.225Q16.85 19.275 15.888 19.688Q14.925 20.1 14.175 19.35L10.65 15.85Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeMuteRoundedW700Filled;
