import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicW100Filled'

      short_name='AutoAwesomeMosaic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.7H4.3V4.3H11Zm2-8.7V4.3h6.7V11Zm0 8.7V13h6.7v6.7Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicW100Filled.displayName = 'AmauiIconMaterialAutoAwesomeMosaicW100Filled';

export default IconMaterialAutoAwesomeMosaicW100Filled;
