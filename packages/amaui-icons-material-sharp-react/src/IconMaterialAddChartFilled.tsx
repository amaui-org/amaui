import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddChartFilled'

      short_name='AddChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h2v-7H7Zm4 0h2V7h-2Zm4 0h2v-4h-2ZM3 21V3h11v2H5v14h14v-9h2v11ZM17 9V7h-2V5h2V3h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialAddChartFilled.displayName = 'AmauiIconMaterialAddChartFilled';

export default IconMaterialAddChartFilled;
