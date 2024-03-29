import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartMinusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartMinusFilled'

      short_name='HeartMinus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 14v-2h8v2Zm-4 7-3.175-2.85q-1.8-1.625-3.087-2.9-1.288-1.275-2.125-2.4-.838-1.125-1.225-2.175Q1 9.625 1 8.475q0-2.35 1.575-3.913Q4.15 3 6.5 3q1.3 0 2.475.537Q10.15 4.075 11 5.075q.85-1 2.025-1.538Q14.2 3 15.5 3q2.125 0 3.562 1.287Q20.5 5.575 20.85 7.3q-.45-.175-.9-.263-.45-.087-.875-.087-2.525 0-4.3 1.762Q13 10.475 13 13q0 1.3.525 2.462.525 1.163 1.475 1.988-.475.425-1.238 1.088Q13 19.2 12.45 19.7Z"/>
    </Icon>
  );
});

IconMaterialHeartMinusFilled.displayName = 'AmauiIconMaterialHeartMinusFilled';

export default IconMaterialHeartMinusFilled;
