import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckFilled'

      short_name='SafetyCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm0-5q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Zm1.65-2.65L11.5 12.2V9h1v2.8l1.85 1.85Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckFilled.displayName = 'AmauiIconMaterialSafetyCheckFilled';

export default IconMaterialSafetyCheckFilled;
