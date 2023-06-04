import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardTravelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelW100Filled'

      short_name='CardTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 19.7q-.625 0-1.063-.438Q3.3 18.825 3.3 18.2V8.8q0-.625.437-1.063Q4.175 7.3 4.8 7.3h3.5V5.8q0-.625.438-1.063Q9.175 4.3 9.8 4.3h4.4q.625 0 1.063.437.437.438.437 1.063v1.5h3.5q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.062-.438.438-1.063.438ZM4 16.45h16v-1.9H4ZM9 7.3h6V5.8q0-.35-.225-.575Q14.55 5 14.2 5H9.8q-.35 0-.575.225Q9 5.45 9 5.8Z"/>
    </Icon>
  );
});

IconMaterialCardTravelW100Filled.displayName = 'AmauiIconMaterialCardTravelW100Filled';

export default IconMaterialCardTravelW100Filled;
