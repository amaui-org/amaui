import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGolfCourseRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseRoundedFilled'
      short_name='GolfCourse'

      {...props}
    >
      <path d="M19.5 21Q18.875 21 18.438 20.562Q18 20.125 18 19.5Q18 18.875 18.438 18.438Q18.875 18 19.5 18Q20.125 18 20.562 18.438Q21 18.875 21 19.5Q21 20.125 20.562 20.562Q20.125 21 19.5 21ZM10 22Q7.5 22 5.75 21.413Q4 20.825 4 20Q4 19.425 4.825 18.975Q5.65 18.525 7 18.25V19Q7 19.425 7.287 19.712Q7.575 20 8 20Q8.425 20 8.713 19.712Q9 19.425 9 19V3.6Q9 3.025 9.475 2.737Q9.95 2.45 10.45 2.7L15.2 5.025Q15.775 5.3 15.775 5.925Q15.775 6.55 15.225 6.825L11 9V18.05Q13.15 18.175 14.575 18.712Q16 19.25 16 20Q16 20.825 14.25 21.413Q12.5 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialGolfCourseRoundedFilled.displayName = 'AmauiIconMaterialGolfCourseRoundedFilled';

export default IconMaterialGolfCourseRoundedFilled;
