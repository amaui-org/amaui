import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewAgenda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgenda'

      short_name='ViewAgenda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-8h18v8Zm2-2h14v-4H5Zm-2-8V3h18v8Zm2-2h14V5H5Zm0 6v4ZM5 5v4Z"/>
    </Icon>
  );
});

IconMaterialViewAgenda.displayName = 'AmauiIconMaterialViewAgenda';

export default IconMaterialViewAgenda;
