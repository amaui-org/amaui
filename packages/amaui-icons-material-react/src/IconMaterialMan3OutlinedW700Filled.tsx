import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3OutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3OutlinedW700Filled'
      short_name='Man3'

      {...props}
    >
      <path d="M9.225 22.525v-6.9h-2V10.2q0-1.3.925-2.225t2.225-.925h3.25q1.3 0 2.225.925t.925 2.225v5.425h-2v6.9ZM12 6.3 9.375 3.675 12 1.05l2.625 2.625Z"/>
    </Icon>
  )
});

export default IconMaterialMan3OutlinedW700Filled;
