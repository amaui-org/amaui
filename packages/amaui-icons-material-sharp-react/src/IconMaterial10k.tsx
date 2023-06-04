import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial10k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10k'

      short_name='10k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.925 15h1.5v-2.25l1.75 2.25H19l-2.325-3L19 9h-1.825l-1.75 2.25V9h-1.5ZM6 15h1.5V9H5v1.5h1Zm2.5 0H13V9H8.5Zm1.5-1.5v-3h1.5v3ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial10k.displayName = 'AmauiIconMaterial10k';

export default IconMaterial10k;
