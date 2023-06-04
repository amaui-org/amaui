import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalatorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorW100Filled'

      short_name='Escalator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm2.35-2.85H9.7l5-9h2.65v-.7H14.3l-5 9H6.65Z"/>
    </Icon>
  );
});

IconMaterialEscalatorW100Filled.displayName = 'AmauiIconMaterialEscalatorW100Filled';

export default IconMaterialEscalatorW100Filled;
