import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchApp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchApp'

      short_name='TouchApp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.625 1q2.275 0 3.887 1.587 1.613 1.588 1.613 3.863 0 1.2-.538 2.35-.537 1.15-1.662 2h-.8V8.9q.45-.5.725-1.113.275-.612.275-1.337 0-1.425-1.037-2.438Q13.05 3 11.625 3 10.15 3 9.137 4.012 8.125 5.025 8.125 6.45q0 .725.262 1.375.263.65.738 1.125v2.45q-1.35-.7-2.175-2-.825-1.3-.825-2.95 0-2.275 1.6-3.863Q9.325 1 11.625 1Zm-1.8 21-5.75-5.75L6.25 14l2.875.65V6.5q0-1.05.725-1.775Q10.575 4 11.625 4q1.05 0 1.775.725.725.725.725 1.775v4.3h.8l5.3 2.575L18.8 22Zm.85-2h6.4l.95-5.45-4.15-2.05h-1.75v-6q0-.225-.137-.363Q11.85 6 11.625 6q-.225 0-.363.137-.137.138-.137.363v10.6l-4.25-.9Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialTouchApp.displayName = 'AmauiIconMaterialTouchApp';

export default IconMaterialTouchApp;
