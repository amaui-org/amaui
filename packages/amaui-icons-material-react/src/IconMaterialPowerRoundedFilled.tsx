import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerRoundedFilled'
      short_name='Power'

      {...props}
    >
      <path d="M9.5 18 6.575 15.075Q6.3 14.8 6.15 14.438Q6 14.075 6 13.675V9Q6 8.175 6.588 7.587Q7.175 7 8 7V4Q8 3.575 8.288 3.287Q8.575 3 9 3Q9.425 3 9.713 3.287Q10 3.575 10 4V7H14V4Q14 3.575 14.288 3.287Q14.575 3 15 3Q15.425 3 15.713 3.287Q16 3.575 16 4V7Q16.825 7 17.413 7.587Q18 8.175 18 9V13.675Q18 14.075 17.85 14.438Q17.7 14.8 17.425 15.075L14.5 18V20Q14.5 20.425 14.213 20.712Q13.925 21 13.5 21H10.5Q10.075 21 9.788 20.712Q9.5 20.425 9.5 20Z"/>
    </Icon>
  );
});

IconMaterialPowerRoundedFilled.displayName = 'AmauiIconMaterialPowerRoundedFilled';

export default IconMaterialPowerRoundedFilled;
