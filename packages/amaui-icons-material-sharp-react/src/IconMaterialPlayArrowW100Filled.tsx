import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowW100Filled'

      short_name='PlayArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 16.65v-9.3L16.6 12Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowW100Filled.displayName = 'AmauiIconMaterialPlayArrowW100Filled';

export default IconMaterialPlayArrowW100Filled;
