import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffRoundedFilled'
      short_name='PowerOff'

      {...props}
    >
      <path d="M19.125 21.9 14.875 17.65 14.525 18V20Q14.525 20.425 14.238 20.712Q13.95 21 13.525 21H10.525Q10.1 21 9.812 20.712Q9.525 20.425 9.525 20V18L6.6 15.075Q6.325 14.8 6.175 14.438Q6.025 14.075 6.025 13.675V8.85Q6.025 8.85 6.025 8.85Q6.025 8.85 6.025 8.85L2.1 4.875Q1.825 4.6 1.825 4.2Q1.825 3.8 2.125 3.5Q2.4 3.225 2.825 3.225Q3.25 3.225 3.525 3.5L20.55 20.525Q20.825 20.8 20.825 21.2Q20.825 21.6 20.525 21.9Q20.25 22.175 19.825 22.175Q19.4 22.175 19.125 21.9ZM17.675 14.8 8.025 5.15V4Q8.025 3.575 8.312 3.287Q8.6 3 9.025 3Q9.45 3 9.738 3.287Q10.025 3.575 10.025 4V7H14.025V4Q14.025 3.575 14.312 3.287Q14.6 3 15.025 3Q15.45 3 15.738 3.287Q16.025 3.575 16.025 4V7Q16.85 7 17.438 7.587Q18.025 8.175 18.025 9V13.675Q18.025 14.025 17.925 14.312Q17.825 14.6 17.675 14.8Z"/>
    </Icon>
  );
});

IconMaterialPowerOffRoundedFilled.displayName = 'AmauiIconMaterialPowerOffRoundedFilled';

export default IconMaterialPowerOffRoundedFilled;
