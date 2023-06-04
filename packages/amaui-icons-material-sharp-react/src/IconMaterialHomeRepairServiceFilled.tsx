import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceFilled'

      short_name='HomeRepairService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 14V8h5V4h10v4h5v6h-4v-2h-2v2H8v-2H6v2Zm7-6h6V6H9ZM2 20v-5h4v1h2v-1h8v1h2v-1h4v5Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceFilled.displayName = 'AmauiIconMaterialHomeRepairServiceFilled';

export default IconMaterialHomeRepairServiceFilled;
