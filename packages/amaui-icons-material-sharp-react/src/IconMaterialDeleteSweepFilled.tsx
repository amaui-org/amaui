import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteSweepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepFilled'

      short_name='DeleteSweep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18v-2h4v2Zm0-8V8h7v2Zm0 4v-2h6v2ZM3 8H2V6h4V4.5h4V6h4v2h-1v11H3Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweepFilled.displayName = 'AmauiIconMaterialDeleteSweepFilled';

export default IconMaterialDeleteSweepFilled;
