import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoSharpFilled'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M9 17H15V15H11V13H15V7H9V9H13V11H9ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialLooksTwoSharpFilled.displayName = 'AmauiIconMaterialLooksTwoSharpFilled';

export default IconMaterialLooksTwoSharpFilled;
