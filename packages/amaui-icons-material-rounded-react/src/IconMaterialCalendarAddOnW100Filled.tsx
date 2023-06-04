import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarAddOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAddOnW100Filled'

      short_name='CalendarAddOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.65 18.35h-7.5q-.625 0-1.062-.437-.438-.438-.438-1.063V6.15q0-.625.438-1.063.437-.437 1.062-.437h1.5v-2h.7v2h7.3v-2h.7v2h1.5q.625 0 1.063.437.437.438.437 1.063v6.5h-.7v-4.3H4.35v8.5q0 .35.225.575.225.225.575.225h7.5v.7Zm5 3v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialCalendarAddOnW100Filled.displayName = 'AmauiIconMaterialCalendarAddOnW100Filled';

export default IconMaterialCalendarAddOnW100Filled;
