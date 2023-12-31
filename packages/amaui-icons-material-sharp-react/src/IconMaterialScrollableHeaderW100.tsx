import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScrollableHeaderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScrollableHeaderW100'

      short_name='ScrollableHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-220H200v220Zm0-248h560v-312H200v312Zm0 0v-312 312Z"/>
    </Icon>
  );
});

IconMaterialScrollableHeaderW100.displayName = 'AmauiIconMaterialScrollableHeaderW100';

export default IconMaterialScrollableHeaderW100;
