import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFemaleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemaleRounded'
      short_name='Female'

      {...props}
    >
      <path d="M11 14.9Q9.025 14.55 7.763 13.012Q6.5 11.475 6.5 9.45Q6.5 7.175 8.113 5.588Q9.725 4 12 4Q14.275 4 15.887 5.588Q17.5 7.175 17.5 9.45Q17.5 11.475 16.238 13.012Q14.975 14.55 13 14.9V17H14Q14.425 17 14.713 17.288Q15 17.575 15 18Q15 18.425 14.713 18.712Q14.425 19 14 19H13V20Q13 20.425 12.713 20.712Q12.425 21 12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V19H10Q9.575 19 9.288 18.712Q9 18.425 9 18Q9 17.575 9.288 17.288Q9.575 17 10 17H11ZM12 13Q13.45 13 14.475 11.975Q15.5 10.95 15.5 9.5Q15.5 8.05 14.475 7.025Q13.45 6 12 6Q10.55 6 9.525 7.025Q8.5 8.05 8.5 9.5Q8.5 10.95 9.525 11.975Q10.55 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialFemaleRounded.displayName = 'AmauiIconMaterialFemaleRounded';

export default IconMaterialFemaleRounded;
