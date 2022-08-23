import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaRoundedW100'
      short_name='Panorama'

      {...props}
    >
      <path d="M8.75 16H15.45Q15.7 16 15.812 15.775Q15.925 15.55 15.775 15.35L14 13Q13.875 12.85 13.688 12.85Q13.5 12.85 13.375 13L11.2 15.7L9.925 14.225Q9.8 14.075 9.613 14.087Q9.425 14.1 9.3 14.25L8.45 15.35Q8.3 15.55 8.4 15.775Q8.5 16 8.75 16ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4.8 18Q4.45 18 4.225 17.775Q4 17.55 4 17.2V6.8Q4 6.45 4.225 6.225Q4.45 6 4.8 6Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialPanoramaRoundedW100.displayName = 'AmauiIconMaterialPanoramaRoundedW100';

export default IconMaterialPanoramaRoundedW100;
