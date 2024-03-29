import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOff'

      short_name='CloudOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 17.15 20H6.5q-2.3 0-3.9-1.6T1 14.5q0-1.925 1.188-3.425 1.187-1.5 3.062-1.925.075-.2.15-.388.075-.187.15-.412L1.4 4.2l1.4-1.4 18.4 18.4ZM6.5 18h8.65L7.1 9.95q-.05.275-.075.525Q7 10.725 7 11h-.5q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18Zm4.625-4.025ZM21.6 18.75l-1.45-1.4q.425-.35.638-.812Q21 16.075 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6q-.675 0-1.3.162-.625.163-1.2.513l-1.45-1.45q.875-.6 1.863-.913Q10.9 4 12 4q2.925 0 4.962 2.037Q19 8.075 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 .975-.375 1.812-.375.838-1.025 1.438Zm-6.775-6.725Z"/>
    </Icon>
  );
});

IconMaterialCloudOff.displayName = 'AmauiIconMaterialCloudOff';

export default IconMaterialCloudOff;
