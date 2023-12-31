import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScrollableHeaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScrollableHeaderW100Filled'

      short_name='ScrollableHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-220H200v220Z"/>
    </Icon>
  );
});

IconMaterialScrollableHeaderW100Filled.displayName = 'AmauiIconMaterialScrollableHeaderW100Filled';

export default IconMaterialScrollableHeaderW100Filled;
