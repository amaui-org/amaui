import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOutlinedW700'
      short_name='Edit'

      {...props}
    >
      <path d="M5.2 19.025H6.2L15.625 9.625L15.125 9.1L14.625 8.6L5.2 18.025ZM2.825 21.4V17.025L16.275 3.575Q16.95 2.9 17.913 2.875Q18.875 2.85 19.65 3.575L20.7 4.6Q21.475 5.325 21.425 6.287Q21.375 7.25 20.7 7.925L7.2 21.4ZM18.975 6.275 17.975 5.25ZM15.625 9.625 15.125 9.1 14.625 8.6 15.625 9.625Z"/>
    </Icon>
  )
});

export default IconMaterialEditOutlinedW700;
