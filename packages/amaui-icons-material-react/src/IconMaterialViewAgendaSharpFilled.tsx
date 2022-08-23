import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewAgendaSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaSharpFilled'
      short_name='ViewAgenda'

      {...props}
    >
      <path d="M3 21V13H21V21ZM3 11V3H21V11Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaSharpFilled.displayName = 'AmauiIconMaterialViewAgendaSharpFilled';

export default IconMaterialViewAgendaSharpFilled;
