import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAddW100Filled'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-539v-249h616v249H172Zm0 367v-248h616v29h-10.25q-4.75 0-9.75-1-83 0-141.5 58.5T568-192v20H172Zm588 92v-92h-92v-28h92v-92h28v92h92v28h-92v92h-28Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAddW100Filled.displayName = 'AmauiIconMaterialSplitscreenAddW100Filled';

export default IconMaterialSplitscreenAddW100Filled;
