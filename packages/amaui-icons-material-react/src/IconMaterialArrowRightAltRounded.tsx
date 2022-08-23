import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltRounded'
      short_name='ArrowRightAlt'

      {...props}
    >
      <path d="M13.3 17.275Q13 16.975 13.012 16.55Q13.025 16.125 13.325 15.825L16.15 13H5Q4.575 13 4.287 12.712Q4 12.425 4 12Q4 11.575 4.287 11.287Q4.575 11 5 11H16.15L13.3 8.15Q13 7.85 13 7.437Q13 7.025 13.3 6.725Q13.6 6.425 14.013 6.425Q14.425 6.425 14.725 6.725L19.3 11.3Q19.45 11.45 19.513 11.625Q19.575 11.8 19.575 12Q19.575 12.2 19.513 12.375Q19.45 12.55 19.3 12.7L14.7 17.3Q14.425 17.575 14.013 17.575Q13.6 17.575 13.3 17.275Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltRounded.displayName = 'AmauiIconMaterialArrowRightAltRounded';

export default IconMaterialArrowRightAltRounded;
