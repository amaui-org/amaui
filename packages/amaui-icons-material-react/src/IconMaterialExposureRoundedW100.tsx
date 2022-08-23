import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureRoundedW100'
      short_name='Exposure'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM6.75 8.1H10.25Q10.4 8.1 10.5 8Q10.6 7.9 10.6 7.75Q10.6 7.6 10.5 7.5Q10.4 7.4 10.25 7.4H6.75Q6.6 7.4 6.5 7.5Q6.4 7.6 6.4 7.75Q6.4 7.9 6.5 8Q6.6 8.1 6.75 8.1ZM5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V5.8Q19 5.65 18.938 5.512Q18.875 5.375 18.75 5.25L5.25 18.75Q5.375 18.875 5.513 18.938Q5.65 19 5.8 19ZM15.25 17.6Q15.1 17.6 15 17.5Q14.9 17.4 14.9 17.25V15.6H13.25Q13.1 15.6 13 15.5Q12.9 15.4 12.9 15.25Q12.9 15.1 13 15Q13.1 14.9 13.25 14.9H14.9V13.25Q14.9 13.1 15 13Q15.1 12.9 15.25 12.9Q15.4 12.9 15.5 13Q15.6 13.1 15.6 13.25V14.9H17.25Q17.4 14.9 17.5 15Q17.6 15.1 17.6 15.25Q17.6 15.4 17.5 15.5Q17.4 15.6 17.25 15.6H15.6V17.25Q15.6 17.4 15.5 17.5Q15.4 17.6 15.25 17.6Z"/>
    </Icon>
  );
});

IconMaterialExposureRoundedW100.displayName = 'AmauiIconMaterialExposureRoundedW100';

export default IconMaterialExposureRoundedW100;
