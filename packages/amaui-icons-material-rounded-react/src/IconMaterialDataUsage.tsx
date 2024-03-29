import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataUsage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataUsage'

      short_name='DataUsage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.15 16.05-2.6-1.5q.225-.625.338-1.263Q19 12.65 19 12q0-2.65-1.7-4.625T13 5.05v-3q3.85.375 6.425 3.225Q22 8.125 22 12q0 1.05-.188 2.075-.187 1.025-.662 1.975ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-3.875 2.575-6.725Q7.15 2.425 11 2.05v3q-2.6.35-4.3 2.325Q5 9.35 5 12q0 2.925 2.038 4.962Q9.075 19 12 19q1.6 0 3.038-.675 1.437-.675 2.462-1.925l2.6 1.5q-1.425 1.95-3.55 3.025T12 22Z"/>
    </Icon>
  );
});

IconMaterialDataUsage.displayName = 'AmauiIconMaterialDataUsage';

export default IconMaterialDataUsage;
