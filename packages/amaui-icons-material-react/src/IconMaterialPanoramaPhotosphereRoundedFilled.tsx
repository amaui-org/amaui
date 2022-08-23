import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaPhotosphereRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaPhotosphereRoundedFilled'
      short_name='PanoramaPhotosphere'

      {...props}
    >
      <path d="M12 22Q8.975 22 6.588 20.413Q4.2 18.825 3 16.3Q2.725 16.175 2.5 16.075Q2.275 15.975 2.05 15.85Q1.55 15.575 1.275 15.125Q1 14.675 1 14.1V9.9Q1 9.325 1.275 8.875Q1.55 8.425 2.05 8.15Q2.275 8.025 2.5 7.925Q2.725 7.825 3 7.7Q4.2 5.175 6.588 3.588Q8.975 2 12 2Q15.025 2 17.413 3.588Q19.8 5.175 21 7.7Q21.275 7.825 21.5 7.925Q21.725 8.025 21.95 8.15Q22.45 8.425 22.725 8.887Q23 9.35 23 9.9V14.1Q23 14.65 22.725 15.113Q22.45 15.575 21.95 15.85Q21.725 15.975 21.5 16.075Q21.275 16.175 21 16.3Q19.8 18.825 17.413 20.413Q15.025 22 12 22ZM12 20Q13.725 20 15.275 19.288Q16.825 18.575 17.95 17.3Q16.475 17.65 14.988 17.825Q13.5 18 12 18Q10.5 18 9.012 17.825Q7.525 17.65 6.05 17.3Q7.175 18.575 8.725 19.288Q10.275 20 12 20ZM12 4Q10.275 4 8.725 4.713Q7.175 5.425 6.05 6.7Q7.525 6.35 9.012 6.175Q10.5 6 12 6Q13.5 6 14.988 6.175Q16.475 6.35 17.95 6.7Q16.825 5.425 15.275 4.713Q13.725 4 12 4Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereRoundedFilled.displayName = 'AmauiIconMaterialPanoramaPhotosphereRoundedFilled';

export default IconMaterialPanoramaPhotosphereRoundedFilled;
