import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistory'

      short_name='WorkHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19V8 19Zm-2 2V6h6V2h8v4h6v6.275q-.45-.325-.95-.563-.5-.237-1.05-.412V8H4v11h7.075q.075.525.225 1.025.15.5.375.975Zm8-15h4V4h-4Zm8 17q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm1.65-2.65.7-.7-1.85-1.85V15h-1v3.2Z"/>
    </Icon>
  );
});

IconMaterialWorkHistory.displayName = 'AmauiIconMaterialWorkHistory';

export default IconMaterialWorkHistory;
