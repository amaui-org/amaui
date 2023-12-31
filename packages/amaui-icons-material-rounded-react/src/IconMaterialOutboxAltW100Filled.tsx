import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboxAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxAltW100Filled'

      short_name='OutboxAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m292-316 354-164-354-164v115l148 49-148 49v115Zm-60 144q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialOutboxAltW100Filled.displayName = 'AmauiIconMaterialOutboxAltW100Filled';

export default IconMaterialOutboxAltW100Filled;
