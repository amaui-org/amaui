import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffW100Filled'

      short_name='KeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 14.2-1.575-1.175-1.275.9-3.275-3.275h6.975L21.8 12ZM7 13.5q.625 0 1.062-.438Q8.5 12.625 8.5 12q0-.3-.113-.575-.112-.275-.325-.487-.212-.213-.487-.325Q7.3 10.5 7 10.5q-.625 0-1.062.438Q5.5 11.375 5.5 12t.438 1.062Q6.375 13.5 7 13.5Zm12.85 7.35-7.5-7.5H11.2q-.275 1.175-1.412 2.088Q8.65 16.35 7 16.35q-1.85 0-3.1-1.25T2.65 12q0-1.8 1.175-3.013Q5 7.775 6.65 7.65l-3.5-3.5.5-.5 16.7 16.7Z"/>
    </Icon>
  );
});

IconMaterialKeyOffW100Filled.displayName = 'AmauiIconMaterialKeyOffW100Filled';

export default IconMaterialKeyOffW100Filled;
