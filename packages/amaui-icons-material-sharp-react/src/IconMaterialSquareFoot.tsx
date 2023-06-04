import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquareFoot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFoot'

      short_name='SquareFoot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V2.45l4.1 4.1L5.75 7.9l.7.7L7.8 7.25l2.6 2.6-1.35 1.35.7.7 1.35-1.35 2.6 2.6-1.35 1.35.7.7 1.35-1.35 2.6 2.6-1.35 1.35.7.7 1.35-1.35L21.55 21Zm3-3h8.3L6 9.7Z"/>
    </Icon>
  );
});

IconMaterialSquareFoot.displayName = 'AmauiIconMaterialSquareFoot';

export default IconMaterialSquareFoot;
