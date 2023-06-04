import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffW100Filled'

      short_name='VideocamOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.05 20.25 2.95 4.15l.5-.5 16.1 16.1Zm1.1-5L17.4 12.5v2.25L7.95 5.3h9.45v6.2l2.75-2.75ZM5.1 5.3l12.3 12.3v1.1H4V5.3Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffW100Filled.displayName = 'AmauiIconMaterialVideocamOffW100Filled';

export default IconMaterialVideocamOffW100Filled;
