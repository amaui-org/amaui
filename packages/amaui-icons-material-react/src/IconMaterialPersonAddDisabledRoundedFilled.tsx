import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonAddDisabledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledRoundedFilled'
      short_name='PersonAddDisabled'

      {...props}
    >
      <path d="M19.1 21.875 16.8 19.6Q16.65 19.8 16.45 19.9Q16.25 20 16 20H2Q1.575 20 1.288 19.712Q1 19.425 1 19V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q9.325 13 9.638 13.012Q9.95 13.025 10.25 13.05L9.2 12Q9.15 12 9.1 12Q9.05 12 9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 7.95 5 7.9Q5 7.85 5 7.8L2.1 4.9Q1.8 4.6 1.812 4.2Q1.825 3.8 2.125 3.5Q2.425 3.2 2.838 3.2Q3.25 3.2 3.55 3.5L20.525 20.475Q20.825 20.775 20.825 21.175Q20.825 21.575 20.525 21.875Q20.225 22.175 19.812 22.175Q19.4 22.175 19.1 21.875ZM19 14Q18.575 14 18.288 13.712Q18 13.425 18 13V11H16Q15.575 11 15.288 10.712Q15 10.425 15 10Q15 9.575 15.288 9.287Q15.575 9 16 9H18V7Q18 6.575 18.288 6.287Q18.575 6 19 6Q19.425 6 19.712 6.287Q20 6.575 20 7V9H22Q22.425 9 22.712 9.287Q23 9.575 23 10Q23 10.425 22.712 10.712Q22.425 11 22 11H20V13Q20 13.425 19.712 13.712Q19.425 14 19 14ZM12.6 9.7 7.3 4.4Q7.675 4.2 8.113 4.1Q8.55 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 8.45 12.9 8.887Q12.8 9.325 12.6 9.7Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledRoundedFilled.displayName = 'AmauiIconMaterialPersonAddDisabledRoundedFilled';

export default IconMaterialPersonAddDisabledRoundedFilled;
