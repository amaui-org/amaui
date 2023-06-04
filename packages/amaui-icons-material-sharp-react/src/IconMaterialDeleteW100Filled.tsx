import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteW100Filled'

      short_name='Delete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 19.7V6h-1v-.7H9v-.7h6v.7h3.7V6h-1v13.7Zm3.75-2.7h.7V8h-.7Zm3.2 0h.7V8h-.7Z"/>
    </Icon>
  );
});

IconMaterialDeleteW100Filled.displayName = 'AmauiIconMaterialDeleteW100Filled';

export default IconMaterialDeleteW100Filled;
