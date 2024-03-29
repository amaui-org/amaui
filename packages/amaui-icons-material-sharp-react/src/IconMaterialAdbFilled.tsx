import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdbFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdbFilled'

      short_name='Adb'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11v-1q0-1.8.812-3.288Q6.625 5.225 8 4.275L6.125 2.4 7 1.5l2.125 2.125q.65-.3 1.387-.463Q11.25 3 12 3t1.488.162q.737.163 1.387.463L17 1.5l.875.9L16 4.275q1.375.95 2.188 2.437Q19 8.2 19 10v1Zm10-2q.425 0 .713-.288Q16 8.425 16 8t-.287-.713Q15.425 7 15 7t-.712.287Q14 7.575 14 8t.288.712Q14.575 9 15 9ZM9 9q.425 0 .713-.288Q10 8.425 10 8t-.287-.713Q9.425 7 9 7t-.712.287Q8 7.575 8 8t.288.712Q8.575 9 9 9Zm3 14q-2.925 0-4.962-2.038Q5 18.925 5 16v-4h14v4q0 2.925-2.038 4.962Q14.925 23 12 23Z"/>
    </Icon>
  );
});

IconMaterialAdbFilled.displayName = 'AmauiIconMaterialAdbFilled';

export default IconMaterialAdbFilled;
