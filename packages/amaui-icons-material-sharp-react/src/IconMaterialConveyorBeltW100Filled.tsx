import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConveyorBeltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConveyorBeltW100Filled'

      short_name='ConveyorBelt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18.4q-.725 0-1.212-.487Q3.3 17.425 3.3 16.7q0-.725.488-1.212Q4.275 15 5 15h14q.725 0 1.213.488.487.487.487 1.212t-.487 1.213q-.488.487-1.213.487Zm0-.7h14q.425 0 .712-.287.288-.288.288-.713t-.288-.713Q19.425 15.7 19 15.7H5q-.425 0-.713.287Q4 16.275 4 16.7t.287.713q.288.287.713.287Zm6.55-4.7V5.6h7.4V13ZM3.3 11.65v-.7h6.25v.7Zm9.95-3h4v-.7h-4Zm-7.95 0h4.25v-.7H5.3Z"/>
    </Icon>
  );
});

IconMaterialConveyorBeltW100Filled.displayName = 'AmauiIconMaterialConveyorBeltW100Filled';

export default IconMaterialConveyorBeltW100Filled;
