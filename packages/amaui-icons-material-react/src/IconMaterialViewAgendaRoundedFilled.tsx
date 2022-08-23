import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewAgendaRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaRoundedFilled'
      short_name='ViewAgenda'

      {...props}
    >
      <path d="M5 11Q4.175 11 3.587 10.412Q3 9.825 3 9V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V9Q21 9.825 20.413 10.412Q19.825 11 19 11ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V15Q3 14.175 3.587 13.587Q4.175 13 5 13H19Q19.825 13 20.413 13.587Q21 14.175 21 15V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaRoundedFilled.displayName = 'AmauiIconMaterialViewAgendaRoundedFilled';

export default IconMaterialViewAgendaRoundedFilled;
