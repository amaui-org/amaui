import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7k'

      short_name='7k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3 2.325-3H16.25l-1.75 2.25V9H13Zm-5.25 0H9.5l1.85-6H6.5v1.5h2.65ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial7k.displayName = 'AmauiIconMaterial7k';

export default IconMaterial7k;
