import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenW100Filled'

      short_name='FileOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.95 21.45-3.6-3.6v3.175h-.7V16.65h4.375v.7h-3.2l3.6 3.6ZM14.3 7.7H18L14.3 4Zm-9 13V3.3h9.35l4.05 4.05v7.3h-3.05v6.05Z"/>
    </Icon>
  );
});

IconMaterialFileOpenW100Filled.displayName = 'AmauiIconMaterialFileOpenW100Filled';

export default IconMaterialFileOpenW100Filled;
