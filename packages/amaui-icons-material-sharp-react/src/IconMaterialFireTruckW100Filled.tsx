import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireTruckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireTruckW100Filled'

      short_name='FireTruck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20q-1.05 0-1.775-.725Q4.5 18.55 4.5 17.5H2.3V11h11V6.3h3.35V5.2h1.7v1.1h1.725l1.625 4.9v6.3h-2.2q0 1.05-.725 1.775Q18.05 20 17 20q-1.05 0-1.775-.725-.725-.725-.725-1.775h-5q0 1.05-.725 1.775Q8.05 20 7 20Zm0-.7q.75 0 1.275-.525.525-.525.525-1.275 0-.725-.525-1.263Q7.75 15.7 7 15.7q-.75 0-1.275.537-.525.538-.525 1.263 0 .75.525 1.275Q6.25 19.3 7 19.3Zm10 0q.75 0 1.275-.525.525-.525.525-1.275 0-.725-.525-1.263Q17.75 15.7 17 15.7q-.75 0-1.275.537-.525.538-.525 1.263 0 .75.525 1.275.525.525 1.275.525ZM14 11h6.9l-1.35-4H14ZM2.3 10v-.7h1V7h-1v-.7h9.2V7h-1v2.3h1v.7ZM4 9.3h2.55V7H4Zm3.25 0H9.8V7H7.25Zm6.05 2.4v5.1H9.4q-.225-.8-.887-1.3Q7.85 15 7 15q-.85 0-1.512.5-.663.5-.888 1.3H3v-5.1Zm.7 0h7v5.1h-1.6q-.225-.8-.887-1.3Q17.85 15 17 15q-.85 0-1.512.5-.663.5-.888 1.3H14Z"/>
    </Icon>
  );
});

IconMaterialFireTruckW100Filled.displayName = 'AmauiIconMaterialFireTruckW100Filled';

export default IconMaterialFireTruckW100Filled;
