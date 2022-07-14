import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesSharpFilled'
      short_name='Pages'

      {...props}
    >
      <path d="M12 17 13.55 13.55 17 12 13.55 10.45 12 7 10.45 10.45 7 12 10.45 13.55ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

export default IconMaterialPagesSharpFilled;
