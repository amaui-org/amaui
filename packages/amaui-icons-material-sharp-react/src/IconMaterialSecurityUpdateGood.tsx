import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateGood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateGood'

      short_name='SecurityUpdateGood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.05 15-2.8-2.8 1.4-1.4 1.4 1.4 3.55-3.55 1.4 1.4ZM5 23V1h14v22Zm2-5h10V6H7Zm0 3h10v-1H7ZM7 4h10V3H7Zm0 0V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateGood.displayName = 'AmauiIconMaterialSecurityUpdateGood';

export default IconMaterialSecurityUpdateGood;
