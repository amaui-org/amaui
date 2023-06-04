import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConversionPathW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConversionPathW100'

      short_name='ConversionPath'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 20.35q-.875 0-1.538-.562-.662-.563-.787-1.438H11q-1.4 0-2.375-.975Q7.65 16.4 7.65 15t.975-2.375Q9.6 11.65 11 11.65h2q1.1 0 1.875-.775.775-.775.775-1.875t-.775-1.875Q14.1 6.35 13 6.35H7.325q-.125.875-.788 1.437Q5.875 8.35 5 8.35q-.975 0-1.662-.688Q2.65 6.975 2.65 6q0-.975.688-1.663Q4.025 3.65 5 3.65q.875 0 1.537.562.663.563.788 1.438H13q1.4 0 2.375.975.975.975.975 2.375t-.975 2.375q-.975.975-2.375.975h-2q-1.1 0-1.875.775Q8.35 13.9 8.35 15t.775 1.875q.775.775 1.875.775h5.675q.125-.875.787-1.438.663-.562 1.538-.562.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.663-.688.687-1.663.687ZM5 7.65q.675 0 1.163-.488Q6.65 6.675 6.65 6q0-.675-.487-1.163Q5.675 4.35 5 4.35t-1.162.487Q3.35 5.325 3.35 6t.488 1.162Q4.325 7.65 5 7.65Z"/>
    </Icon>
  );
});

IconMaterialConversionPathW100.displayName = 'AmauiIconMaterialConversionPathW100';

export default IconMaterialConversionPathW100;
