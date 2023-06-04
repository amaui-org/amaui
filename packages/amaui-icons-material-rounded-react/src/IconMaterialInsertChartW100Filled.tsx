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
      <path d="M8.3 16.35q.15 0 .25-.1t.1-.25v-5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v5q0 .15.1.25t.25.1Zm3.7 0q.15 0 .25-.1t.1-.25V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v8q0 .15.1.25t.25.1Zm3.7 0q.15 0 .25-.1t.1-.25v-2q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialInsertChartW100Filled.displayName = 'AmauiIconMaterialInsertChartW100Filled';

export default IconMaterialInsertChartW100Filled;
