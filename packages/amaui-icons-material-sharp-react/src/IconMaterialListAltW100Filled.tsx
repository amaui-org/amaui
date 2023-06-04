import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltW100Filled'

      short_name='ListAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.45 16.4h1.4V15h-1.4Zm0-3.7h1.4v-1.4h-1.4Zm0-3.7h1.4V7.6h-1.4Zm3.8 7.05h5.2v-.7h-5.2Zm0-3.7h5.2v-.7h-5.2Zm0-3.7h5.2v-.7h-5.2ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialListAltW100Filled.displayName = 'AmauiIconMaterialListAltW100Filled';

export default IconMaterialListAltW100Filled;
