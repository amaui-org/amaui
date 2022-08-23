import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeartPlusRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartPlusRoundedW100Filled'
      short_name='HeartPlus'

      {...props}
    >
      <path d="M17.65 16.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3ZM11 19.25l-.55-.5q-2.425-2.225-4.012-3.8-1.588-1.575-2.5-2.762Q3.025 11 2.663 10.05 2.3 9.1 2.3 8.15q0-1.775 1.213-2.988Q4.725 3.95 6.5 3.95q1.325 0 2.475.712 1.15.713 2.025 2.088.875-1.375 2.025-2.088 1.15-.712 2.475-.712 1.725 0 2.913 1.137Q19.6 6.225 19.7 7.925q-.35-.125-.775-.2Q18.5 7.65 18 7.65q-2.225 0-3.787 1.55-1.563 1.55-1.563 3.8 0 .95.338 1.85.337.9.987 1.65-.55.5-1.15 1.062-.6.563-1.275 1.188Z"/>
    </Icon>
  );
});

IconMaterialHeartPlusRoundedW100Filled.displayName = 'AmauiIconMaterialHeartPlusRoundedW100Filled';

export default IconMaterialHeartPlusRoundedW100Filled;
