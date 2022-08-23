import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteRoundedFilled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M8 15Q7.575 15 7.287 14.712Q7 14.425 7 14V10Q7 9.575 7.287 9.287Q7.575 9 8 9H11L14.3 5.7Q14.775 5.225 15.387 5.487Q16 5.75 16 6.425V17.575Q16 18.25 15.387 18.512Q14.775 18.775 14.3 18.3L11 15Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteRoundedFilled.displayName = 'AmauiIconMaterialVolumeMuteRoundedFilled';

export default IconMaterialVolumeMuteRoundedFilled;
