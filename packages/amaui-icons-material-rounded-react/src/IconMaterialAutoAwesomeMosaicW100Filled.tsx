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
      <path d="M11 19.7H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3H11Zm2-8.7V4.3h5.2q.65 0 1.075.425.425.425.425 1.075V11Zm0 8.7V13h6.7v5.2q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicW100Filled.displayName = 'AmauiIconMaterialAutoAwesomeMosaicW100Filled';

export default IconMaterialAutoAwesomeMosaicW100Filled;
