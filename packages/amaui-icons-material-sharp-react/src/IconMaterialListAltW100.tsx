import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltW100'

      short_name='ListAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.45 16.4h1.4V15h-1.4Zm0-3.7h1.4v-1.4h-1.4Zm0-3.7h1.4V7.6h-1.4Zm3.8 7.05h5.2v-.7h-5.2Zm0-3.7h5.2v-.7h-5.2Zm0-3.7h5.2v-.7h-5.2ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialListAltW100.displayName = 'AmauiIconMaterialListAltW100';

export default IconMaterialListAltW100;
