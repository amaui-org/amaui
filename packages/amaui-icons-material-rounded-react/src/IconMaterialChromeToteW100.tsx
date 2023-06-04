import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeToteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeToteW100'

      short_name='ChromeTote'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m546 554-80-79q-4-4-10-4.5t-10 4.5q-4 4-3.5 10t4.5 10l92 92q9 9 21 9t21-9l93-93q4-4 4-9t-4-10q-4-5-10-4.5t-10 4.5l-80 79V365q0-6-4-10t-10-4q-6 0-10 4t-4 10v189Zm178 274h10q2 11-5.5 19.5T710 858l-490 62q-11 2-19.5-5T190 896l-56-440q-2-11 5-19.5t19-10.5l54-6v28l-48 6 54 438 506-64Zm-404-80q-12 0-20-8t-8-20V240q0-12 8-20t20-8h480q12 0 20 8t8 20v480q0 12-8 20t-20 8H320Zm0-28h480V240H320v480ZM218 892Zm102-172V240v480Z"/>
    </Icon>
  );
});

IconMaterialChromeToteW100.displayName = 'AmauiIconMaterialChromeToteW100';

export default IconMaterialChromeToteW100;
