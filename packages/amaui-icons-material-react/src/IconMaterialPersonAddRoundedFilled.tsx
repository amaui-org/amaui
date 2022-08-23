import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonAddRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddRoundedFilled'
      short_name='PersonAdd'

      {...props}
    >
      <path d="M19 14Q18.575 14 18.288 13.712Q18 13.425 18 13V11H16Q15.575 11 15.288 10.712Q15 10.425 15 10Q15 9.575 15.288 9.287Q15.575 9 16 9H18V7Q18 6.575 18.288 6.287Q18.575 6 19 6Q19.425 6 19.712 6.287Q20 6.575 20 7V9H22Q22.425 9 22.712 9.287Q23 9.575 23 10Q23 10.425 22.712 10.712Q22.425 11 22 11H20V13Q20 13.425 19.712 13.712Q19.425 14 19 14ZM9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 6.35 6.175 5.175Q7.35 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 9.65 11.825 10.825Q10.65 12 9 12ZM2 20Q1.575 20 1.288 19.712Q1 19.425 1 19V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q10.65 13 12.25 13.387Q13.85 13.775 15.4 14.55Q16.125 14.925 16.562 15.637Q17 16.35 17 17.2V19Q17 19.425 16.712 19.712Q16.425 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialPersonAddRoundedFilled.displayName = 'AmauiIconMaterialPersonAddRoundedFilled';

export default IconMaterialPersonAddRoundedFilled;
