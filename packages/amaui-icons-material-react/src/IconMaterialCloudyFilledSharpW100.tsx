import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudyFilledSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudyFilledSharpW100'
      short_name='CloudyFilled'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.65 1.175-2.925T6.35 10.3q.25-2.15 1.863-3.575Q9.825 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.925 2.275-.925.925-2.275.925Zm0-.7h12q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6 9.925 6 8.463 7.462 7 8.925 7 11h-.5q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18Zm5.5-6Z"/>
    </Icon>
  );
});

IconMaterialCloudyFilledSharpW100.displayName = 'AmauiIconMaterialCloudyFilledSharpW100';

export default IconMaterialCloudyFilledSharpW100;
