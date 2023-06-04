import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertChartW100Filled'

      short_name='InsertChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.95 16.35h.7v-5.7h-.7Zm3.7 0h.7v-8.7h-.7Zm3.7 0h.7v-2.7h-.7ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialInsertChartW100Filled.displayName = 'AmauiIconMaterialInsertChartW100Filled';

export default IconMaterialInsertChartW100Filled;
