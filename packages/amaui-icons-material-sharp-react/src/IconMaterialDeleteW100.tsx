import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteW100'

      short_name='Delete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 19.7V6h-1v-.7H9v-.7h6v.7h3.7V6h-1v13.7ZM7 19h10V6H7Zm3.05-2h.7V8h-.7Zm3.2 0h.7V8h-.7ZM7 6v13Z"/>
    </Icon>
  );
});

IconMaterialDeleteW100.displayName = 'AmauiIconMaterialDeleteW100';

export default IconMaterialDeleteW100;
