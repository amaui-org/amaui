import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenFilled'

      short_name='WindowOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V3h16v18Zm3-10h4v-1h2v1h4V6H7Zm-1 8h12V5H6Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenFilled.displayName = 'AmauiIconMaterialWindowOpenFilled';

export default IconMaterialWindowOpenFilled;
