import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownRoundedW100Filled'
      short_name='VolumeDown'

      {...props}
    >
      <path d="M7.05 13.7Q6.725 13.7 6.513 13.487Q6.3 13.275 6.3 12.95V11.05Q6.3 10.725 6.513 10.512Q6.725 10.3 7.05 10.3H9.55L11.425 8.425Q11.775 8.075 12.238 8.262Q12.7 8.45 12.7 8.95V15.05Q12.7 15.55 12.238 15.737Q11.775 15.925 11.425 15.575L9.55 13.7ZM15.7 15.1V8.85Q16.425 9.375 16.812 10.212Q17.2 11.05 17.2 12Q17.2 12.95 16.812 13.762Q16.425 14.575 15.7 15.1Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownRoundedW100Filled.displayName = 'AmauiIconMaterialVolumeDownRoundedW100Filled';

export default IconMaterialVolumeDownRoundedW100Filled;
