import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteForeverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverW100Filled'

      short_name='DeleteForever'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 15.6 12 13l2.6 2.6.5-.5-2.6-2.6 2.6-2.6-.5-.5L12 12 9.4 9.4l-.5.5 2.6 2.6-2.6 2.6Zm-3.1 4.1V6h-1v-.7H9v-.7h6v.7h3.7V6h-1v13.7Z"/>
    </Icon>
  );
});

IconMaterialDeleteForeverW100Filled.displayName = 'AmauiIconMaterialDeleteForeverW100Filled';

export default IconMaterialDeleteForeverW100Filled;
