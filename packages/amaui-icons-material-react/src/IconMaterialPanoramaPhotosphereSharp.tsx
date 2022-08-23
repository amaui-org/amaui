import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaPhotosphereSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaPhotosphereSharp'
      short_name='PanoramaPhotosphere'

      {...props}
    >
      <path d="M12 22Q8.975 22 6.588 20.413Q4.2 18.825 3 16.3L1 15.35V8.65L3 7.7Q4.2 5.175 6.588 3.588Q8.975 2 12 2Q15.025 2 17.413 3.588Q19.8 5.175 21 7.7L23 8.65V15.35L21 16.3Q19.8 18.825 17.413 20.413Q15.025 22 12 22ZM12 20Q13.725 20 15.275 19.288Q16.825 18.575 17.95 17.3Q16.475 17.65 14.988 17.825Q13.5 18 12 18Q10.5 18 9.012 17.825Q7.525 17.65 6.05 17.3Q7.175 18.575 8.725 19.288Q10.275 20 12 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 4Q10.275 4 8.725 4.713Q7.175 5.425 6.05 6.7Q7.525 6.35 9.012 6.175Q10.5 6 12 6Q13.5 6 14.988 6.175Q16.475 6.35 17.95 6.7Q16.825 5.425 15.275 4.713Q13.725 4 12 4ZM12 16Q14.675 16 17.013 15.5Q19.35 15 21 14.1V9.9Q19.35 9 17.013 8.5Q14.675 8 12 8Q9.325 8 6.988 8.5Q4.65 9 3 9.9V14.1Q4.65 15 6.988 15.5Q9.325 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereSharp.displayName = 'AmauiIconMaterialPanoramaPhotosphereSharp';

export default IconMaterialPanoramaPhotosphereSharp;
