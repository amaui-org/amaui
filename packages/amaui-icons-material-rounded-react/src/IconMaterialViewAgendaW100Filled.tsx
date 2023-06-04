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
      <path d="M5.8 10.5q-.65 0-1.075-.425Q4.3 9.65 4.3 9V6.6q0-.65.425-1.075Q5.15 5.1 5.8 5.1h12.4q.65 0 1.075.425.425.425.425 1.075V9q0 .65-.425 1.075-.425.425-1.075.425Zm0 8.4q-.65 0-1.075-.425Q4.3 18.05 4.3 17.4V15q0-.65.425-1.075Q5.15 13.5 5.8 13.5h12.4q.65 0 1.075.425.425.425.425 1.075v2.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaW100Filled.displayName = 'AmauiIconMaterialViewAgendaW100Filled';

export default IconMaterialViewAgendaW100Filled;
