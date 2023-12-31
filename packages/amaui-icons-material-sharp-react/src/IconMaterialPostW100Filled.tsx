import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPostW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostW100Filled'

      short_name='Post'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm56-230h504v-34H228v34Zm0 104h504v-28H228v28Z"/>
    </Icon>
  );
});

IconMaterialPostW100Filled.displayName = 'AmauiIconMaterialPostW100Filled';

export default IconMaterialPostW100Filled;
