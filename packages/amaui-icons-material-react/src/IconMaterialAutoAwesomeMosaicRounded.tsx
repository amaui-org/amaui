import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicRounded'
      short_name='AutoAwesomeMosaic'

      {...props}
    >
      <path d="M11 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H11ZM9 19V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM13 11V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V11ZM15 9H19V5Q19 5 19 5Q19 5 19 5H15ZM13 21V13H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM15 19H19Q19 19 19 19Q19 19 19 19V15H15ZM9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12ZM15 9Q15 9 15 9Q15 9 15 9ZM15 15Q15 15 15 15Q15 15 15 15Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicRounded.displayName = 'AmauiIconMaterialAutoAwesomeMosaicRounded';

export default IconMaterialAutoAwesomeMosaicRounded;
