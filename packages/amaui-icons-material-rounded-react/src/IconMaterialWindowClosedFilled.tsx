import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedFilled'

      short_name='WindowClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V3h16v18Zm3-10h4v-1h2v1h4V6H7Zm0 7h10v-5H7Zm-1 1h12V5H6Z"/>
    </Icon>
  );
});

IconMaterialWindowClosedFilled.displayName = 'AmauiIconMaterialWindowClosedFilled';

export default IconMaterialWindowClosedFilled;
