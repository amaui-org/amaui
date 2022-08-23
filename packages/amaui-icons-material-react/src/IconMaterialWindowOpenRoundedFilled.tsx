import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOpenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenRoundedFilled'
      short_name='WindowOpen'

      {...props}
    >
      <path d="M4 21V3h16v18Zm3-10h4v-1h2v1h4V6H7Zm-1 8h12V5H6Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenRoundedFilled.displayName = 'AmauiIconMaterialWindowOpenRoundedFilled';

export default IconMaterialWindowOpenRoundedFilled;
