import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteRoundedW100'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M9.05 13.7Q8.725 13.7 8.512 13.487Q8.3 13.275 8.3 12.95V11.05Q8.3 10.725 8.512 10.512Q8.725 10.3 9.05 10.3H11.55L13.425 8.425Q13.775 8.075 14.238 8.262Q14.7 8.45 14.7 8.95V15.05Q14.7 15.55 14.238 15.737Q13.775 15.925 13.425 15.575L11.55 13.7ZM14 8.85 11.85 11H9V13H11.85L14 15.15ZM11.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteRoundedW100.displayName = 'AmauiIconMaterialVolumeMuteRoundedW100';

export default IconMaterialVolumeMuteRoundedW100;
