import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadDoneRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadDoneRoundedW100'
      short_name='DownloadDone'

      {...props}
    >
      <path d="M6.025 19.35Q5.875 19.35 5.775 19.25Q5.675 19.15 5.675 19Q5.675 18.85 5.775 18.75Q5.875 18.65 6.025 18.65H18.025Q18.175 18.65 18.275 18.75Q18.375 18.85 18.375 19Q18.375 19.15 18.275 19.25Q18.175 19.35 18.025 19.35ZM9.575 14.8Q9.425 14.8 9.3 14.75Q9.175 14.7 9.05 14.575L5.075 10.6Q4.95 10.475 4.95 10.35Q4.95 10.225 5.075 10.1Q5.2 9.975 5.325 9.975Q5.45 9.975 5.575 10.1L9.575 14.1L18.475 5.2Q18.6 5.075 18.725 5.075Q18.85 5.075 18.975 5.2Q19.1 5.325 19.1 5.45Q19.1 5.575 18.975 5.7L10.1 14.575Q9.975 14.7 9.85 14.75Q9.725 14.8 9.575 14.8Z"/>
    </Icon>
  );
});

IconMaterialDownloadDoneRoundedW100.displayName = 'AmauiIconMaterialDownloadDoneRoundedW100';

export default IconMaterialDownloadDoneRoundedW100;
