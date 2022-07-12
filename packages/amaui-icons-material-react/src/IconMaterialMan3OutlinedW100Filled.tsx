import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3OutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3OutlinedW100Filled'
      short_name='Man3'

      {...props}
    >
      <path d="M10.3 21.6v-6.45H8.6V9.3q0-.625.437-1.062Q9.475 7.8 10.1 7.8h3.8q.625 0 1.063.438.437.437.437 1.062v5.85h-1.7v6.45ZM12 6.25 10.15 4.4 12 2.55l1.85 1.85Z"/>
    </Icon>
  )
});

export default IconMaterialMan3OutlinedW100Filled;
