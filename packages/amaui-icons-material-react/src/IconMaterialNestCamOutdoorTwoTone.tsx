import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestCamOutdoorTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamOutdoorTwoTone'
      short_name='NestCamOutdoor'

      {...props}
    >
      <path d="M12.8 20.025Q12.45 20.025 12.15 19.9Q11.85 19.775 11.575 19.55L7.35 16.025Q6.7 15.475 6.225 14.8Q5.75 14.125 5.45 13.375Q5.175 13.65 4.8 13.825Q4.425 14 4 14H2V6H4Q4.725 6 5.288 6.463Q5.85 6.925 5.975 7.625Q7.05 6 8.575 5.25Q10.1 4.5 11.65 4.5Q12.825 4.5 13.8 4.9Q14.775 5.3 15.65 6.025L19.9 9.55Q20.225 9.825 20.425 10.225Q20.625 10.625 20.625 11.05Q20.625 11.375 20.525 11.7Q20.425 12.025 20.15 12.35L14.4 19.275Q14.1 19.625 13.65 19.825Q13.2 20.025 12.8 20.025ZM12.85 18Q12.85 18 12.85 18Q12.85 18 12.85 18L18.6 11.075Q18.6 11.075 18.6 11.075Q18.6 11.075 18.6 11.075L14.375 7.55Q13.775 7.05 13.05 6.787Q12.325 6.525 11.55 6.525Q9.675 6.5 8.35 7.812Q7.025 9.125 7 10.975Q6.975 11.95 7.4 12.875Q7.825 13.8 8.625 14.475Z"/>
    </Icon>
  );
});

IconMaterialNestCamOutdoorTwoTone.displayName = 'AmauiIconMaterialNestCamOutdoorTwoTone';

export default IconMaterialNestCamOutdoorTwoTone;
