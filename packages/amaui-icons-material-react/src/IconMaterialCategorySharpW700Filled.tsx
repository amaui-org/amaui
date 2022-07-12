import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCategorySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySharpW700Filled'
      short_name='Category'

      {...props}
    >
      <path d="M5 11.925 12 0.475 19 11.925ZM18.2 23.525Q15.975 23.525 14.413 21.975Q12.85 20.425 12.85 18.2Q12.85 15.975 14.413 14.412Q15.975 12.85 18.2 12.85Q20.425 12.85 21.975 14.412Q23.525 15.975 23.525 18.2Q23.525 20.425 21.975 21.975Q20.425 23.525 18.2 23.525ZM1.075 23.025V13.35H10.775V23.025Z"/>
    </Icon>
  )
});

export default IconMaterialCategorySharpW700Filled;
