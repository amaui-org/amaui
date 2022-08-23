import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGolfCourseSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseSharpW100Filled'
      short_name='GolfCourse'

      {...props}
    >
      <path d="M19.5 20.35Q19.15 20.35 18.9 20.1Q18.65 19.85 18.65 19.5Q18.65 19.15 18.9 18.9Q19.15 18.65 19.5 18.65Q19.85 18.65 20.1 18.9Q20.35 19.15 20.35 19.5Q20.35 19.85 20.1 20.1Q19.85 20.35 19.5 20.35ZM10 21.35Q7.775 21.35 6.213 20.962Q4.65 20.575 4.65 20Q4.65 19.55 5.825 19.188Q7 18.825 8.25 18.75V20.15H9.65V3.05L15.55 5.9L10.35 8.6V18.65Q12.5 18.775 13.925 19.137Q15.35 19.5 15.35 20Q15.35 20.575 13.788 20.962Q12.225 21.35 10 21.35Z"/>
    </Icon>
  );
});

IconMaterialGolfCourseSharpW100Filled.displayName = 'AmauiIconMaterialGolfCourseSharpW100Filled';

export default IconMaterialGolfCourseSharpW100Filled;
