import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreamAppsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamAppsW100Filled'

      short_name='StreamApps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m619 680-27 27q-7 7-16.5 3.458Q566 706.917 566 697V482.412q0-13.412 8.625-21.912Q583.25 452 596 452h230q12.75 0 21.375 8.625T856 482v168q0 12.75-8.625 21.375T826 680H619ZM312 964q-24.75 0-42.375-17.625T252 904V248q0-24.75 17.625-42.375T312 188h336q24.75 0 42.375 17.625T708 248v124h-28v-62H280v532h400v-62h28v123.523Q708 929 690.375 946.5 672.75 964 648 964H312Z"/>
    </Icon>
  );
});

IconMaterialStreamAppsW100Filled.displayName = 'AmauiIconMaterialStreamAppsW100Filled';

export default IconMaterialStreamAppsW100Filled;
