import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewAgendaSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaSharpW100'
      short_name='ViewAgenda'

      {...props}
    >
      <path d="M4.3 18.9V13.5H19.7V18.9ZM5 18.2H19V14.2H5ZM4.3 10.5V5.1H19.7V10.5ZM5 9.8H19V5.8H5ZM5 14.2V18.2ZM5 5.8V9.8Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaSharpW100.displayName = 'AmauiIconMaterialViewAgendaSharpW100';

export default IconMaterialViewAgendaSharpW100;
