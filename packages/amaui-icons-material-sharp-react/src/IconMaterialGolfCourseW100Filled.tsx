import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGolfCourseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseW100Filled'

      short_name='GolfCourse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 20.35q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm-9.5 1q-2.225 0-3.787-.388Q4.65 20.575 4.65 20q0-.45 1.175-.812Q7 18.825 8.25 18.75v1.4h1.4V3.05l5.9 2.85-5.2 2.7v10.05q2.15.125 3.575.487 1.425.363 1.425.863 0 .575-1.562.962-1.563.388-3.788.388Z"/>
    </Icon>
  );
});

IconMaterialGolfCourseW100Filled.displayName = 'AmauiIconMaterialGolfCourseW100Filled';

export default IconMaterialGolfCourseW100Filled;
