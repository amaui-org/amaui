import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightSightAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoW100'

      short_name='NightSightAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.65q1.8 0 3.25-.875t2.5-2.45q-3.575.075-5.837-2Q8.65 12.25 8.65 9q0-.575.088-1.163.087-.587.287-1.212-2.125.725-3.4 2.45T4.35 13q0 2.75 1.95 4.7 1.95 1.95 4.7 1.95Zm0 .7q-3.075 0-5.212-2.138Q3.65 16.075 3.65 13q0-2.8 1.863-4.913Q7.375 5.975 10.225 5.7q-.425.65-.65 1.55-.225.9-.225 1.75 0 2.75 1.95 4.7 1.95 1.95 4.7 1.95.5 0 .988-.075.487-.075.962-.225-.725 2.2-2.612 3.6-1.888 1.4-4.338 1.4Zm3.725-9.675 2.75-8.35h1.05l2.75 8.35h-.725l-.675-2h-3.75l-.65 2Zm1.625-2.7h3.3L18 2.95Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoW100.displayName = 'AmauiIconMaterialNightSightAutoW100';

export default IconMaterialNightSightAutoW100;
