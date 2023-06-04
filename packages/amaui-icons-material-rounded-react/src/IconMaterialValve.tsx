import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialValve = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Valve'

      short_name='Valve'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 8V5H7V3h10v2h-4v3ZM4 21v-8h2v1h3v-3H8V9h8v2h-1v3h3v-1h2v8h-2v-1H6v1Zm2-3h12v-2h-5v-5h-2v5H6Zm6 0Z"/>
    </Icon>
  );
});

IconMaterialValve.displayName = 'AmauiIconMaterialValve';

export default IconMaterialValve;
