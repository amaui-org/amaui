import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestConnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestConnectW100'

      short_name='NestConnect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.35q-1.8 0-3.075-1.275Q7.65 15.8 7.65 14v-4q0-1.8 1.275-3.075Q10.2 5.65 12 5.65q1.8 0 3.075 1.275Q16.35 8.2 16.35 10v4q0 1.8-1.275 3.075Q13.8 18.35 12 18.35Zm0-.7q1.5 0 2.575-1.075Q15.65 15.5 15.65 14v-4q0-1.5-1.075-2.575Q13.5 6.35 12 6.35q-1.5 0-2.575 1.075Q8.35 8.5 8.35 10v4q0 1.5 1.075 2.575Q10.5 17.65 12 17.65ZM5.8 21.7q-.625 0-1.062-.438Q4.3 20.825 4.3 20.2V3.8q0-.625.438-1.063Q5.175 2.3 5.8 2.3h12.4q.625 0 1.063.437.437.438.437 1.063v16.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h12.4q.35 0 .575-.225Q19 20.55 19 20.2V3.8q0-.35-.225-.575Q18.55 3 18.2 3H5.8q-.35 0-.575.225Q5 3.45 5 3.8v16.4q0 .35.225.575Q5.45 21 5.8 21ZM12 9.7q-.275 0-.487-.213Q11.3 9.275 11.3 9t.213-.488Q11.725 8.3 12 8.3t.488.212q.212.213.212.488t-.212.487Q12.275 9.7 12 9.7Z"/>
    </Icon>
  );
});

IconMaterialNestConnectW100.displayName = 'AmauiIconMaterialNestConnectW100';

export default IconMaterialNestConnectW100;
