import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewAgendaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaSharp'
      short_name='ViewAgenda'

      {...props}
    >
      <path d="M3 21V13H21V21ZM5 19H19V15H5ZM3 11V3H21V11ZM5 9H19V5H5ZM5 15V19ZM5 5V9Z"/>
    </Icon>
  );
});

export default IconMaterialViewAgendaSharp;
