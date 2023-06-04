import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookFilled'

      short_name='Book'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm7-18v7l2.5-1.5L16 11V4Z"/>
    </Icon>
  );
});

IconMaterialBookFilled.displayName = 'AmauiIconMaterialBookFilled';

export default IconMaterialBookFilled;
