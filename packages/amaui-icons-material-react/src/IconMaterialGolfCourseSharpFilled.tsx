import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGolfCourseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseSharpFilled'
      short_name='GolfCourse'

      {...props}
    >
      <path d="M19.5 21Q18.875 21 18.438 20.562Q18 20.125 18 19.5Q18 18.875 18.438 18.438Q18.875 18 19.5 18Q20.125 18 20.562 18.438Q21 18.875 21 19.5Q21 20.125 20.562 20.562Q20.125 21 19.5 21ZM10 22Q7.5 22 5.75 21.413Q4 20.825 4 20Q4 19.425 4.825 18.975Q5.65 18.525 7 18.25V20H9V2L17 5.9L11 9V18.05Q13.15 18.175 14.575 18.712Q16 19.25 16 20Q16 20.825 14.25 21.413Q12.5 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialGolfCourseSharpFilled.displayName = 'AmauiIconMaterialGolfCourseSharpFilled';

export default IconMaterialGolfCourseSharpFilled;
