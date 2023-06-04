import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewTimeline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimeline'

      short_name='ViewTimeline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h6v-2H6Zm6-8h6V7h-6Zm-3 4h6v-2H9Zm-6 8V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialViewTimeline.displayName = 'AmauiIconMaterialViewTimeline';

export default IconMaterialViewTimeline;
