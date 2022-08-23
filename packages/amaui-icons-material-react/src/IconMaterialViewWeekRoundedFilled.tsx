import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewWeekRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekRoundedFilled'
      short_name='ViewWeek'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H5.325Q6.15 4 6.738 4.588Q7.325 5.175 7.325 6V18Q7.325 18.825 6.738 19.413Q6.15 20 5.325 20ZM11.35 20Q10.525 20 9.938 19.413Q9.35 18.825 9.35 18V6Q9.35 5.175 9.938 4.588Q10.525 4 11.35 4H12.675Q13.5 4 14.088 4.588Q14.675 5.175 14.675 6V18Q14.675 18.825 14.088 19.413Q13.5 20 12.675 20ZM18.675 20Q17.85 20 17.263 19.413Q16.675 18.825 16.675 18V6Q16.675 5.175 17.263 4.588Q17.85 4 18.675 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialViewWeekRoundedFilled.displayName = 'AmauiIconMaterialViewWeekRoundedFilled';

export default IconMaterialViewWeekRoundedFilled;
