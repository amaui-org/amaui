import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcessChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChartFilled'

      short_name='ProcessChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.3 18.45-1.8-.9 6-12 1.8.9Zm6.6 0-1.8-.9 6-12 1.8.9Zm6.6 0-1.8-.9 6-12 1.8.9Z"/>
    </Icon>
  );
});

IconMaterialProcessChartFilled.displayName = 'AmauiIconMaterialProcessChartFilled';

export default IconMaterialProcessChartFilled;
