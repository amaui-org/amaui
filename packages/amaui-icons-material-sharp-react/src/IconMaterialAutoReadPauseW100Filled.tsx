import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseW100Filled'

      short_name='AutoReadPause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.05 13.35h.7v-6.7h-.7Zm3.2 0h.7v-6.7h-.7ZM3.3 19.5V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPauseW100Filled.displayName = 'AmauiIconMaterialAutoReadPauseW100Filled';

export default IconMaterialAutoReadPauseW100Filled;
