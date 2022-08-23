import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks5SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5SharpFilled'
      short_name='Looks5'

      {...props}
    >
      <path d="M9 17H15V11H11V9H15V7H9V13H13V15H9ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialLooks5SharpFilled.displayName = 'AmauiIconMaterialLooks5SharpFilled';

export default IconMaterialLooks5SharpFilled;
