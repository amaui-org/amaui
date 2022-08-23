import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowClosedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedRoundedFilled'
      short_name='WindowClosed'

      {...props}
    >
      <path d="M4 21V3h16v18Zm3-10h4v-1h2v1h4V6H7Zm0 7h10v-5H7Zm-1 1h12V5H6Z"/>
    </Icon>
  );
});

IconMaterialWindowClosedRoundedFilled.displayName = 'AmauiIconMaterialWindowClosedRoundedFilled';

export default IconMaterialWindowClosedRoundedFilled;
