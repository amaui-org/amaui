import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastRewindW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindW100Filled'

      short_name='FastRewind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.425 16.2-6.3-4.2 6.3-4.2Zm-8.55 0-6.3-4.2 6.3-4.2Z"/>
    </Icon>
  );
});

IconMaterialFastRewindW100Filled.displayName = 'AmauiIconMaterialFastRewindW100Filled';

export default IconMaterialFastRewindW100Filled;
