import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeartPlusRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartPlusRoundedW100'
      short_name='HeartPlus'

      {...props}
    >
      <path d="M11 11.475Zm0 7.775-.55-.5q-2.425-2.225-4.012-3.8-1.588-1.575-2.5-2.762Q3.025 11 2.663 10.05 2.3 9.1 2.3 8.15q0-1.775 1.213-2.988Q4.725 3.95 6.5 3.95q1.325 0 2.475.712 1.15.713 2.025 2.088.875-1.375 2.025-2.088 1.15-.712 2.475-.712 1.65 0 2.812 1.062 1.163 1.063 1.363 2.638h-.7q-.175-1.3-1.15-2.15-.975-.85-2.325-.85-1.2 0-2.212.687-1.013.688-1.938 2.163h-.7Q9.7 6 8.7 5.325q-1-.675-2.2-.675-1.475 0-2.487 1Q3 6.65 3 8.15q0 .85.35 1.725.35.875 1.25 2.012.9 1.138 2.45 2.675Q8.6 16.1 11 18.3q.8-.725 1.5-1.375t1.3-1.225l.075.075.175.175.175.175.075.075q-.6.575-1.287 1.2-.688.625-1.463 1.35Zm6.65-2.9v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialHeartPlusRoundedW100.displayName = 'AmauiIconMaterialHeartPlusRoundedW100';

export default IconMaterialHeartPlusRoundedW100;
