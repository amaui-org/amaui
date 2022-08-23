import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteRoundedW100Filled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M9.05 13.7Q8.725 13.7 8.512 13.487Q8.3 13.275 8.3 12.95V11.05Q8.3 10.725 8.512 10.512Q8.725 10.3 9.05 10.3H11.55L13.425 8.425Q13.775 8.075 14.238 8.262Q14.7 8.45 14.7 8.95V15.05Q14.7 15.55 14.238 15.737Q13.775 15.925 13.425 15.575L11.55 13.7Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteRoundedW100Filled.displayName = 'AmauiIconMaterialVolumeMuteRoundedW100Filled';

export default IconMaterialVolumeMuteRoundedW100Filled;
