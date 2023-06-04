import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthW100Filled'

      short_name='CalendarViewMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 11.65q-.325 0-.562-.238Q4 11.175 4 10.85V6.8q0-.35.225-.575Q4.45 6 4.8 6h3.275q.325 0 .562.237.238.238.238.563v4.05q0 .325-.238.562-.237.238-.562.238Zm5.575 0q-.325 0-.563-.238-.237-.237-.237-.562V6.8q0-.325.237-.563Q10.05 6 10.375 6h3.25q.325 0 .563.237.237.238.237.563v4.05q0 .325-.237.562-.238.238-.563.238Zm5.55 0q-.325 0-.562-.238-.238-.237-.238-.562V6.8q0-.325.238-.563Q15.6 6 15.925 6H19.2q.35 0 .575.225Q20 6.45 20 6.8v4.05q0 .325-.237.562-.238.238-.563.238ZM4.8 18q-.35 0-.575-.225Q4 17.55 4 17.2v-4.05q0-.325.238-.563.237-.237.562-.237h3.275q.325 0 .562.237.238.238.238.563v4.05q0 .325-.238.562Q8.4 18 8.075 18Zm5.575 0q-.325 0-.563-.238-.237-.237-.237-.562v-4.05q0-.325.237-.563.238-.237.563-.237h3.25q.325 0 .563.237.237.238.237.563v4.05q0 .325-.237.562-.238.238-.563.238Zm5.55 0q-.325 0-.562-.238-.238-.237-.238-.562v-4.05q0-.325.238-.563.237-.237.562-.237H19.2q.325 0 .563.237.237.238.237.563v4.05q0 .35-.225.575Q19.55 18 19.2 18Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthW100Filled.displayName = 'AmauiIconMaterialCalendarViewMonthW100Filled';

export default IconMaterialCalendarViewMonthW100Filled;
