import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryFilled'

      short_name='WorkHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6h6V2h8v4h6v6.275q-.875-.625-1.9-.95Q19.075 11 18 11q-2.9 0-4.95 2.05Q11 15.1 11 18q0 .775.163 1.538.162.762.512 1.462Zm8-15h4V4h-4Zm8 17q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm1.65-2.65.7-.7-1.85-1.85V15h-1v3.2Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryFilled.displayName = 'AmauiIconMaterialWorkHistoryFilled';

export default IconMaterialWorkHistoryFilled;
