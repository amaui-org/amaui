import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReorderSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderSharpFilled'
      short_name='Reorder'

      {...props}
    >
      <path d="M3 15V13H21V15ZM3 19V17H21V19ZM3 11V9H21V11ZM3 7V5H21V7Z"/>
    </Icon>
  );
});

IconMaterialReorderSharpFilled.displayName = 'AmauiIconMaterialReorderSharpFilled';

export default IconMaterialReorderSharpFilled;
