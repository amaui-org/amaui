import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewAgendaSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaSharpW700Filled'
      short_name='ViewAgenda'

      {...props}
    >
      <path d="M2.15 22.35V12.8H21.85V22.35ZM2.15 11.2V1.65H21.85V11.2Z"/>
    </Icon>
  )
});

export default IconMaterialViewAgendaSharpW700Filled;
