import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabW100Filled'

      short_name='Tab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM13 8.5q0 .625.438 1.062.437.438 1.062.438H20V6.8q0-.325-.237-.563Q19.525 6 19.2 6H13Z"/>
    </Icon>
  );
});

IconMaterialTabW100Filled.displayName = 'AmauiIconMaterialTabW100Filled';

export default IconMaterialTabW100Filled;
