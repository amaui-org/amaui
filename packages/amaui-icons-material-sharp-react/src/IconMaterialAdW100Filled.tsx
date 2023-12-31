import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdW100Filled'

      short_name='Ad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-432H200v432Z"/>
    </Icon>
  );
});

IconMaterialAdW100Filled.displayName = 'AmauiIconMaterialAdW100Filled';

export default IconMaterialAdW100Filled;
