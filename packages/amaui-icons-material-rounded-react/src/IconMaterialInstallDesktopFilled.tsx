import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallDesktopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallDesktopFilled'

      short_name='InstallDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h8v2H4v12h16v-3h2v3q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm8-7.425q-.2 0-.375-.063-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.287-.688Q12.4 8.6 12.7 8.3q.275-.275.7-.275.425 0 .7.275l1.9 1.875V4q0-.425.288-.713Q16.575 3 17 3t.712.287Q18 3.575 18 4v6.175L19.9 8.3q.275-.275.687-.288Q21 8 21.3 8.3q.275.275.275.7 0 .425-.275.7l-3.6 3.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialInstallDesktopFilled.displayName = 'AmauiIconMaterialInstallDesktopFilled';

export default IconMaterialInstallDesktopFilled;
