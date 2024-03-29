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
      <path d="M12 17q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Zm.5-5.2 1.5 1.5q.15.15.15.35 0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15l-1.65-1.65q-.05-.05-.15-.35V9.5q0-.2.15-.35Q11.8 9 12 9q.2 0 .35.15.15.15.15.35ZM12 21.925h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckFilled.displayName = 'AmauiIconMaterialSafetyCheckFilled';

export default IconMaterialSafetyCheckFilled;
