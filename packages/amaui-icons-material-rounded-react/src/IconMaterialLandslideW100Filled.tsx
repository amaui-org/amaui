import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandslideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideW100Filled'

      short_name='Landslide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.2v-1.7l2.7.875 9.3-3.075 2.275 3q.575.75.163 1.575-.413.825-1.363.825H4.8q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2ZM6 17.625l-2.7-.875v-3l2.7.875 4.675-1.55 3.9 1.7Zm12.075-4.8 2.2-.975q.2-.075.313-.263.112-.187.112-.387v-1.1q0-.25-.15-.438-.15-.187-.4-.237l-2-.45q-.15-.05-.3 0t-.275.15l-1 .8q-.125.1-.2.225-.075.125-.075.3v1.1q0 .175.075.3t.2.225l.775.65q.15.125.338.15.187.025.387-.05ZM6 13.875 3.3 13v-2.2q0-.625.437-1.063Q4.175 9.3 4.8 9.3h1.825q.35 0 .663.15.312.15.512.425L9.925 12.6ZM12.5 7.4l2.75-1.1q.2-.075.325-.263.125-.187.125-.387v-2q0-.25-.162-.45-.163-.2-.413-.25l-2.575-.525q-.125-.025-.262.012-.138.038-.263.113L10.6 3.5q-.15.1-.225.25-.075.15-.075.325v1.85q0 .175.075.325.075.15.225.25l1.25.825q.15.1.313.113.162.012.337-.038Z"/>
    </Icon>
  );
});

IconMaterialLandslideW100Filled.displayName = 'AmauiIconMaterialLandslideW100Filled';

export default IconMaterialLandslideW100Filled;
