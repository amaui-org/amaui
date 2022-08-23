import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewAgendaRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaRoundedW100Filled'
      short_name='ViewAgenda'

      {...props}
    >
      <path d="M5.8 10.5Q5.15 10.5 4.725 10.075Q4.3 9.65 4.3 9V6.6Q4.3 5.95 4.725 5.525Q5.15 5.1 5.8 5.1H18.2Q18.85 5.1 19.275 5.525Q19.7 5.95 19.7 6.6V9Q19.7 9.65 19.275 10.075Q18.85 10.5 18.2 10.5ZM5.8 18.9Q5.15 18.9 4.725 18.475Q4.3 18.05 4.3 17.4V15Q4.3 14.35 4.725 13.925Q5.15 13.5 5.8 13.5H18.2Q18.85 13.5 19.275 13.925Q19.7 14.35 19.7 15V17.4Q19.7 18.05 19.275 18.475Q18.85 18.9 18.2 18.9Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaRoundedW100Filled.displayName = 'AmauiIconMaterialViewAgendaRoundedW100Filled';

export default IconMaterialViewAgendaRoundedW100Filled;
