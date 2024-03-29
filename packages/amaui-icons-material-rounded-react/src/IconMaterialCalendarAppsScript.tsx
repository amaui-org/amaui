import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarAppsScript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAppsScript'

      short_name='CalendarAppsScript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.075 19H5q-.825 0-1.413-.587Q3 17.825 3 17V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h6V2h2v2h1q.825 0 1.413.588Q19 5.175 19 6v6.075q-.25-.05-.487-.063Q18.275 12 18 12t-.512.012q-.238.013-.488.063V9H5v8h7.075q-.05.25-.063.488Q12 17.725 12 18t.012.512q.013.238.063.488ZM14 22q-.425 0-.712-.288Q13 21.425 13 21t.288-.712Q13.575 20 14 20h2.825l-2.3-1.625q-.35-.25-.412-.637-.063-.388.162-.738t.625-.413q.4-.062.75.163l2.325 1.6L17 15.7q-.15-.375.025-.75t.575-.525q.4-.15.775.025t.525.575l.95 2.65.75-2.725q.125-.4.462-.613.338-.212.738-.087.4.125.625.462.225.338.1.738l-1.55 5.8q-.1.35-.362.55-.263.2-.613.2Z"/>
    </Icon>
  );
});

IconMaterialCalendarAppsScript.displayName = 'AmauiIconMaterialCalendarAppsScript';

export default IconMaterialCalendarAppsScript;
