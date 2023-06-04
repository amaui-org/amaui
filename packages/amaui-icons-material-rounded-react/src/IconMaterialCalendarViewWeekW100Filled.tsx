import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekW100Filled'

      short_name='CalendarViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.15 18q-.325 0-.562-.238-.238-.237-.238-.562V6.8q0-.325.238-.563Q12.825 6 13.15 6h1.875q.325 0 .563.237.237.238.237.563v10.4q0 .325-.237.562-.238.238-.563.238Zm-4.175 0q-.325 0-.562-.238-.238-.237-.238-.562V6.8q0-.325.238-.563Q8.65 6 8.975 6h1.875q.325 0 .563.237.237.238.237.563v10.4q0 .325-.237.562-.238.238-.563.238ZM4.8 18q-.35 0-.575-.225Q4 17.55 4 17.2V6.8q0-.35.225-.575Q4.45 6 4.8 6h1.875q.325 0 .563.237.237.238.237.563v10.4q0 .325-.237.562Q7 18 6.675 18Zm12.525 0q-.325 0-.562-.238-.238-.237-.238-.562V6.8q0-.325.238-.563Q17 6 17.325 6H19.2q.35 0 .575.225Q20 6.45 20 6.8v10.4q0 .35-.225.575Q19.55 18 19.2 18Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekW100Filled.displayName = 'AmauiIconMaterialCalendarViewWeekW100Filled';

export default IconMaterialCalendarViewWeekW100Filled;
