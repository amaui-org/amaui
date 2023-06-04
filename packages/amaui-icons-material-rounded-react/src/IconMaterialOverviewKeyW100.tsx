import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOverviewKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyW100'

      short_name='OverviewKey'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M140 804q-26 0-43-17t-17-43V408q0-26 17-43t43-17h336q26 0 43 17t17 43v336q0 26-17 43t-43 17H140Zm0-28h336q12 0 22-10t10-22V408q0-12-10-22t-22-10H140q-12 0-22 10t-10 22v336q0 12 10 22t22 10Zm554 28q-6 0-10-4t-4-10V362q0-6 4-10t10-4q6 0 10 4t4 10v428q0 6-4 10t-10 4Zm172 0q-6 0-10-4t-4-10V362q0-6 4-10t10-4q6 0 10 4t4 10v428q0 6-4 10t-10 4Zm-758-28V376v400Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyW100.displayName = 'AmauiIconMaterialOverviewKeyW100';

export default IconMaterialOverviewKeyW100;
