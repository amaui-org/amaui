import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewAgendaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaW100'

      short_name='ViewAgenda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.9v-5.4h15.4v5.4Zm.7-.7h14v-4H5Zm-.7-7.7V5.1h15.4v5.4Zm.7-.7h14v-4H5Zm0 4.4v4Zm0-8.4v4Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaW100.displayName = 'AmauiIconMaterialViewAgendaW100';

export default IconMaterialViewAgendaW100;
