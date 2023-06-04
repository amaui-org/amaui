import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveDownW100Filled'

      short_name='TextSelectMoveDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 296v-28h616v28H172Zm308 444L356 616l20-20 90 89V402h28v283l90-89 20 20-124 124ZM172 884v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveDownW100Filled.displayName = 'AmauiIconMaterialTextSelectMoveDownW100Filled';

export default IconMaterialTextSelectMoveDownW100Filled;
