import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcessChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChartW100Filled'

      short_name='ProcessChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.75 17.575-.625-.3L8.55 6.425l.625.3Zm5.85 0-.625-.3L14.4 6.425l.625.3Zm5.85 0-.625-.3 5.425-10.85.625.3Z"/>
    </Icon>
  );
});

IconMaterialProcessChartW100Filled.displayName = 'AmauiIconMaterialProcessChartW100Filled';

export default IconMaterialProcessChartW100Filled;
