import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewAgendaSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaSharpW100Filled'
      short_name='ViewAgenda'

      {...props}
    >
      <path d="M4.3 18.9V13.5H19.7V18.9ZM4.3 10.5V5.1H19.7V10.5Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaSharpW100Filled.displayName = 'AmauiIconMaterialViewAgendaSharpW100Filled';

export default IconMaterialViewAgendaSharpW100Filled;
