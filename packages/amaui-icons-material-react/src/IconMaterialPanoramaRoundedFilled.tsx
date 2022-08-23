import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaRoundedFilled'
      short_name='Panorama'

      {...props}
    >
      <path d="M7 16H17Q17.3 16 17.45 15.725Q17.6 15.45 17.4 15.2L14.65 11.525Q14.5 11.325 14.25 11.325Q14 11.325 13.85 11.525L11.25 15L9.4 12.525Q9.25 12.325 9 12.325Q8.75 12.325 8.6 12.525L6.6 15.2Q6.4 15.45 6.55 15.725Q6.7 16 7 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialPanoramaRoundedFilled.displayName = 'AmauiIconMaterialPanoramaRoundedFilled';

export default IconMaterialPanoramaRoundedFilled;
