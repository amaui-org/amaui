import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicRoundedFilled'
      short_name='AutoAwesomeMosaic'

      {...props}
    >
      <path d="M11 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H11ZM13 11V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V11ZM13 21V13H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicRoundedFilled.displayName = 'AmauiIconMaterialAutoAwesomeMosaicRoundedFilled';

export default IconMaterialAutoAwesomeMosaicRoundedFilled;
