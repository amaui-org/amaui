import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerRoundedW100'
      short_name='Scanner'

      {...props}
    >
      <path d="M18.1 13.3 5.55 8.75Q5.425 8.7 5.363 8.575Q5.3 8.45 5.35 8.325Q5.4 8.2 5.525 8.137Q5.65 8.075 5.775 8.125L18.25 12.65Q19.05 12.95 19.375 13.55Q19.7 14.15 19.7 14.8V17.2Q19.7 17.85 19.275 18.275Q18.85 18.7 18.2 18.7H5.8Q5.15 18.7 4.725 18.275Q4.3 17.85 4.3 17.2V14.8Q4.3 14.15 4.725 13.725Q5.15 13.3 5.8 13.3ZM18.2 18Q18.5 18 18.75 17.75Q19 17.5 19 17.2V14.8Q19 14.5 18.75 14.25Q18.5 14 18.2 14H5.8Q5.5 14 5.25 14.25Q5 14.5 5 14.8V17.2Q5 17.5 5.25 17.75Q5.5 18 5.8 18ZM10.55 16.35H17Q17.15 16.35 17.25 16.25Q17.35 16.15 17.35 16Q17.35 15.85 17.25 15.75Q17.15 15.65 17 15.65H10.55Q10.4 15.65 10.3 15.75Q10.2 15.85 10.2 16Q10.2 16.15 10.3 16.25Q10.4 16.35 10.55 16.35ZM7 16.7Q7.3 16.7 7.5 16.5Q7.7 16.3 7.7 16Q7.7 15.7 7.5 15.5Q7.3 15.3 7 15.3Q6.7 15.3 6.5 15.5Q6.3 15.7 6.3 16Q6.3 16.3 6.5 16.5Q6.7 16.7 7 16.7ZM5 18Q5 18 5 17.75Q5 17.5 5 17.2V14.8Q5 14.5 5 14.25Q5 14 5 14Q5 14 5 14.25Q5 14.5 5 14.8V17.2Q5 17.5 5 17.75Q5 18 5 18Z"/>
    </Icon>
  );
});

IconMaterialScannerRoundedW100.displayName = 'AmauiIconMaterialScannerRoundedW100';

export default IconMaterialScannerRoundedW100;
