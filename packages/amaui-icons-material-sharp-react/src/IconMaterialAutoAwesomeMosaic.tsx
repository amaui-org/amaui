import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaic'

      short_name='AutoAwesomeMosaic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21H3V3h8Zm-2-2V5H5v14Zm4-8V3h8v8Zm2-2h4V5h-4Zm-2 12v-8h8v8Zm2-2h4v-4h-4Zm-6-7Zm6-3Zm0 6Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaic.displayName = 'AmauiIconMaterialAutoAwesomeMosaic';

export default IconMaterialAutoAwesomeMosaic;
