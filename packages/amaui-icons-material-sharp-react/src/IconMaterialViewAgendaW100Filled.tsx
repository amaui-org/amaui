import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewAgendaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaW100Filled'

      short_name='ViewAgenda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.9v-5.4h15.4v5.4Zm0-8.4V5.1h15.4v5.4Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaW100Filled.displayName = 'AmauiIconMaterialViewAgendaW100Filled';

export default IconMaterialViewAgendaW100Filled;
