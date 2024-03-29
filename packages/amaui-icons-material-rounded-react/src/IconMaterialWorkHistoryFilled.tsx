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
      <path d="M11 18q0 .775.163 1.538.162.762.512 1.462H4q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6h4V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v4.275q-.875-.625-1.9-.95Q19.075 11 18 11q-2.9 0-4.95 2.05Q11 15.1 11 18ZM10 6h4V4h-4Zm8 17q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm1.65-2.65.7-.7-1.85-1.85V15h-1v3.2Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryFilled.displayName = 'AmauiIconMaterialWorkHistoryFilled';

export default IconMaterialWorkHistoryFilled;
