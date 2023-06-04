import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateGoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateGoodFilled'

      short_name='SecurityUpdateGood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.05 15-2.8-2.8 1.4-1.4 1.4 1.4 3.55-3.55 1.4 1.4ZM5 23V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateGoodFilled.displayName = 'AmauiIconMaterialSecurityUpdateGoodFilled';

export default IconMaterialSecurityUpdateGoodFilled;
