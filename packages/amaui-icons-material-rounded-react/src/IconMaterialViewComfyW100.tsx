import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyW100'

      short_name='ViewComfy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v10.4q0 .625-.437 1.062-.438.438-1.063.438H4.8q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2ZM20 11.65V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v4.85h16ZM9.2 18h10q.35 0 .575-.225Q20 17.55 20 17.2v-4.85H9.2V18Zm-4.4 0h3.7v-5.65H4v4.85q0 .35.225.575Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialViewComfyW100.displayName = 'AmauiIconMaterialViewComfyW100';

export default IconMaterialViewComfyW100;
