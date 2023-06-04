import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewAgendaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaFilled'

      short_name='ViewAgenda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11q-.825 0-1.413-.588Q3 9.825 3 9V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v4q0 .825-.587 1.412Q19.825 11 19 11Zm0 10q-.825 0-1.413-.587Q3 19.825 3 19v-4q0-.825.587-1.413Q4.175 13 5 13h14q.825 0 1.413.587Q21 14.175 21 15v4q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaFilled.displayName = 'AmauiIconMaterialViewAgendaFilled';

export default IconMaterialViewAgendaFilled;
