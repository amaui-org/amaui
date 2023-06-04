import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicFilled'

      short_name='AutoAwesomeMosaic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21H3V3h8Zm2-10V3h8v8Zm0 10v-8h8v8Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicFilled.displayName = 'AmauiIconMaterialAutoAwesomeMosaicFilled';

export default IconMaterialAutoAwesomeMosaicFilled;
