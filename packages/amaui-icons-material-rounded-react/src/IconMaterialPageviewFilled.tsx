import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPageviewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewFilled'

      short_name='Pageview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.625 17.025q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7L15.3 13.9q.35-.525.525-1.125.175-.6.175-1.275 0-1.875-1.312-3.188Q13.375 7 11.5 7 9.625 7 8.312 8.312 7 9.625 7 11.5q0 1.875 1.312 3.188Q9.625 16 11.5 16q.65 0 1.262-.175.613-.175 1.138-.525ZM11.5 14q-1.05 0-1.775-.725Q9 12.55 9 11.5q0-1.05.725-1.775Q10.45 9 11.5 9q1.05 0 1.775.725Q14 10.45 14 11.5q0 1.05-.725 1.775Q12.55 14 11.5 14ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialPageviewFilled.displayName = 'AmauiIconMaterialPageviewFilled';

export default IconMaterialPageviewFilled;
