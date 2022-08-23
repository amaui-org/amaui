import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBeachAccessRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessRoundedFilled'
      short_name='BeachAccess'

      {...props}
    >
      <path d="M18.9 20.3 13.25 14.65 14.65 13.25 20.3 18.9Q20.575 19.175 20.575 19.6Q20.575 20.025 20.3 20.3Q20.025 20.575 19.6 20.575Q19.175 20.575 18.9 20.3ZM4.5 18.525Q3 16.2 2.913 13.487Q2.825 10.775 4.15 8.375Q4.225 9.225 4.575 10.287Q4.925 11.35 5.538 12.525Q6.15 13.7 7 14.938Q7.85 16.175 8.875 17.375L7.575 18.675Q6.875 19.375 5.938 19.337Q5 19.3 4.5 18.525ZM10.25 16Q9.05 14.8 8.15 13.387Q7.25 11.975 6.738 10.65Q6.225 9.325 6.163 8.237Q6.1 7.15 6.625 6.625Q7.15 6.075 8.238 6.125Q9.325 6.175 10.663 6.688Q12 7.2 13.413 8.112Q14.825 9.025 16.025 10.225ZM18.675 7.575 17.4 8.85Q16.225 7.825 14.988 7Q13.75 6.175 12.588 5.55Q11.425 4.925 10.363 4.562Q9.3 4.2 8.45 4.125Q10.825 2.9 13.525 3Q16.225 3.1 18.5 4.525Q19.275 5.025 19.325 5.95Q19.375 6.875 18.675 7.575Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessRoundedFilled.displayName = 'AmauiIconMaterialBeachAccessRoundedFilled';

export default IconMaterialBeachAccessRoundedFilled;
