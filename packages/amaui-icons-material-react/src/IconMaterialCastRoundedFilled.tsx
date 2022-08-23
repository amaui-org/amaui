import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastRoundedFilled'
      short_name='Cast'

      {...props}
    >
      <path d="M13 20Q13 17.725 12.137 15.725Q11.275 13.725 9.775 12.225Q8.275 10.725 6.275 9.863Q4.275 9 2 9V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM10 20Q9.6 20 9.288 19.712Q8.975 19.425 8.925 19Q8.6 16.675 6.963 15.037Q5.325 13.4 3 13.075Q2.575 13.025 2.288 12.725Q2 12.425 2 12Q2 11.575 2.3 11.287Q2.6 11 3 11.05Q6.15 11.4 8.375 13.625Q10.6 15.85 10.95 19Q11 19.4 10.713 19.7Q10.425 20 10 20ZM6 20Q5.65 20 5.312 19.725Q4.975 19.45 4.825 19.025Q4.6 18.375 4.113 17.887Q3.625 17.4 2.975 17.175Q2.55 17.025 2.275 16.7Q2 16.375 2 16Q2 15.575 2.288 15.3Q2.575 15.025 2.975 15.1Q4.475 15.4 5.538 16.462Q6.6 17.525 6.9 19.025Q6.975 19.425 6.713 19.712Q6.45 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialCastRoundedFilled.displayName = 'AmauiIconMaterialCastRoundedFilled';

export default IconMaterialCastRoundedFilled;
