import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertChartFilled'

      short_name='InsertChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h2v-7H7Zm4 0h2V7h-2Zm4 0h2v-4h-2ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialInsertChartFilled.displayName = 'AmauiIconMaterialInsertChartFilled';

export default IconMaterialInsertChartFilled;
