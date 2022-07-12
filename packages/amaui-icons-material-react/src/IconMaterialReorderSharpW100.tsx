import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReorderSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderSharpW100'
      short_name='Reorder'

      {...props}
    >
      <path d="M3.65 14.35V13.65H20.35V14.35ZM3.65 18.35V17.65H20.35V18.35ZM3.65 10.35V9.65H20.35V10.35ZM3.65 6.35V5.65H20.35V6.35Z"/>
    </Icon>
  )
});

export default IconMaterialReorderSharpW100;
