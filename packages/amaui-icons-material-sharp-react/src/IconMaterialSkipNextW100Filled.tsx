import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipNextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextW100Filled'

      short_name='SkipNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.2 16.2V7.8h.7v8.4Zm-9.1 0V7.8l6.3 4.2Z"/>
    </Icon>
  );
});

IconMaterialSkipNextW100Filled.displayName = 'AmauiIconMaterialSkipNextW100Filled';

export default IconMaterialSkipNextW100Filled;
