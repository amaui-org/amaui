import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDonutSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallW100Filled'

      short_name='DonutSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.475 11.1q-.225-.55-.637-.95-.413-.4-.963-.6v-6.2q3.125.3 5.313 2.462 2.187 2.163 2.487 5.288Zm-3.3 9.55q-3.35-.35-5.6-2.813-2.25-2.462-2.25-5.837 0-3.375 2.25-5.863 2.25-2.487 5.6-2.787v6.2q-.8.275-1.275.95-.475.675-.475 1.5t.488 1.475q.487.65 1.262.925Zm1.7 0V14.4q.575-.2.975-.6.4-.4.625-.95h6.2q-.3 3.125-2.487 5.313Q16 20.35 12.875 20.65Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallW100Filled.displayName = 'AmauiIconMaterialDonutSmallW100Filled';

export default IconMaterialDonutSmallW100Filled;
