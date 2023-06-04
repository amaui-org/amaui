import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMatchCaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchCaseW100Filled'

      short_name='MatchCase'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m248 659-37 107q-2 5-6 7.5t-9 2.5q-8 0-12.5-6.5T182 755l134-365q2-5 6-7.5t9-2.5h11q5 0 9 2.5t6 7.5l137 364q3 8-2 15t-13 7q-5 0-9.5-3t-6.5-8l-38-106H248Zm11-28h156l-77-216h-2l-77 216Zm409 155q-42 0-66-22.5T578 703q0-42 29-68t77-26q20 0 40 4.5t34 12.5v-24q0-42-19.5-63T680 518q-17 0-32 4.5T617 537q-5 3-10.5 2.5T597 535q-4-4-4-9.5t5-8.5q19-14 38.5-19.5T680 492q54 0 80 28.5t26 85.5v162q0 6-4 10t-10 4q-6 0-10-4t-4-10v-33h-4q-14 26-35.5 38.5T668 786Zm-2-26q40 0 66-30.5t26-77.5q-13-8-32-12.5t-38-4.5q-38 0-59.5 18T607 703q0 26 16 41.5t43 15.5Z"/>
    </Icon>
  );
});

IconMaterialMatchCaseW100Filled.displayName = 'AmauiIconMaterialMatchCaseW100Filled';

export default IconMaterialMatchCaseW100Filled;
