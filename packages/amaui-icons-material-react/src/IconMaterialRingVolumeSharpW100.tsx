import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRingVolumeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeSharpW100'
      short_name='RingVolume'

      {...props}
    >
      <path d="M4.1 19.675 1.325 16.95Q3.575 14.55 6.35 13.35Q9.125 12.15 12.025 12.15Q14.925 12.15 17.7 13.35Q20.475 14.55 22.725 16.95L19.95 19.675L16.675 17.2V13.7Q15.475 13.275 14.3 13.062Q13.125 12.85 12.025 12.85Q10.925 12.85 9.75 13.062Q8.575 13.275 7.375 13.7V17.2ZM4.175 18.75 6.675 16.85V13.95Q5.425 14.525 4.275 15.3Q3.125 16.075 2.325 16.9ZM19.875 18.75 21.775 16.95Q20.8 16.05 19.725 15.3Q18.65 14.55 17.375 13.95V16.8ZM11.675 6.9V3.2H12.375V6.9ZM17.625 9.45 17.125 8.95 19.775 6.35 20.275 6.85ZM6.425 9.45 3.725 6.9 4.275 6.35 6.925 8.95ZM17.375 13.95Q17.375 13.95 17.375 13.95Q17.375 13.95 17.375 13.95ZM6.675 13.95Q6.675 13.95 6.675 13.95Q6.675 13.95 6.675 13.95Z"/>
    </Icon>
  );
});

IconMaterialRingVolumeSharpW100.displayName = 'AmauiIconMaterialRingVolumeSharpW100';

export default IconMaterialRingVolumeSharpW100;
