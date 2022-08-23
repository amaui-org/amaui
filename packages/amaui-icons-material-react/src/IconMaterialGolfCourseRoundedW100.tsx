import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGolfCourseRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseRoundedW100'
      short_name='GolfCourse'

      {...props}
    >
      <path d="M19.5 20.35Q19.15 20.35 18.9 20.1Q18.65 19.85 18.65 19.5Q18.65 19.15 18.9 18.9Q19.15 18.65 19.5 18.65Q19.85 18.65 20.1 18.9Q20.35 19.15 20.35 19.5Q20.35 19.85 20.1 20.1Q19.85 20.35 19.5 20.35ZM10 21.35Q7.775 21.35 6.213 20.962Q4.65 20.575 4.65 20Q4.65 19.55 5.825 19.188Q7 18.825 8.25 18.75V19.45Q8.25 19.725 8.45 19.938Q8.65 20.15 8.95 20.15Q9.225 20.15 9.438 19.938Q9.65 19.725 9.65 19.45V4.25Q9.65 3.8 10 3.587Q10.35 3.375 10.725 3.575L14.2 5.25Q14.625 5.45 14.637 5.925Q14.65 6.4 14.225 6.6L10.35 8.6V18.65Q12.5 18.775 13.925 19.137Q15.35 19.5 15.35 20Q15.35 20.575 13.788 20.962Q12.225 21.35 10 21.35Z"/>
    </Icon>
  );
});

IconMaterialGolfCourseRoundedW100.displayName = 'AmauiIconMaterialGolfCourseRoundedW100';

export default IconMaterialGolfCourseRoundedW100;
