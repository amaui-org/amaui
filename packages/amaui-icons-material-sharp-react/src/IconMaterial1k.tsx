import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1k'

      short_name='1k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15h1.5v-2.25L15.25 15h1.825l-2.325-3 2.325-3H15.25l-1.75 2.25V9H12Zm-3.5 0H10V9H7v1.5h1.5ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial1k.displayName = 'AmauiIconMaterial1k';

export default IconMaterial1k;
