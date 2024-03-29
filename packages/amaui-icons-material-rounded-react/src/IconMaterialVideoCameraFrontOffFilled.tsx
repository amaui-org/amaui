import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffFilled'

      short_name='VideoCameraFrontOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.15 16.65 18 13.5v1.675L6.825 4H16q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.25-.25.55-.125.3.125.3.475v8.6q0 .35-.3.475t-.55-.125Zm-1.3 6L1.35 4.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.5 18.5q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM4 4l14 14q0 .825-.587 1.413Q16.825 20 16 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4Zm2 12h8v-.55q0-1.1-1.1-1.775Q11.8 13 10 13q-1.8 0-2.9.675Q6 14.35 6 15.45Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffFilled.displayName = 'AmauiIconMaterialVideoCameraFrontOffFilled';

export default IconMaterialVideoCameraFrontOffFilled;
