import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipToFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontW100Filled'

      short_name='FlipToFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 13v-2H5v2Zm0 4v-2H5v2Zm0 2.7V19H5v.7ZM4.3 9V7H5v2ZM15 19.7V19h2v.7Zm-6.7-4V4.3h11.4v11.4ZM9 15h10V5H9Zm2 4.7V19h2v.7Zm-4 0V19h2v.7Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontW100Filled.displayName = 'AmauiIconMaterialFlipToFrontW100Filled';

export default IconMaterialFlipToFrontW100Filled;
