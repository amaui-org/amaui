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
      <path d="M3 21v-8h18v8Zm0-10V3h18v8Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaFilled.displayName = 'AmauiIconMaterialViewAgendaFilled';

export default IconMaterialViewAgendaFilled;
