import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVerticalW100Filled'

      short_name='KeyVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-620q25 0 42.5-17.5T541-680q0-25-17.5-42.5T481-740q-25 0-42.5 17.5T421-680q0 25 17.5 42.5T481-620Zm0 532-89-87 48-65-51-71 38-57v-144q-48-19-84-61.5T307-680q0-74 50-124t124-50q74 0 124 50t50 124q0 64-36 106.5T535-512v370l-54 54Z"/>
    </Icon>
  );
});

IconMaterialKeyVerticalW100Filled.displayName = 'AmauiIconMaterialKeyVerticalW100Filled';

export default IconMaterialKeyVerticalW100Filled;
