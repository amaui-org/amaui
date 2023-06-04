import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayW100'

      short_name='AutoReadPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.175 12.025 2.1-1.4q.35-.225.35-.625t-.35-.625l-2.1-1.4q-.375-.25-.775-.038-.4.213-.4.663v2.8q0 .45.4.662.4.213.775-.037Zm-6.6 6.2q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1ZM4 17.8 5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayW100.displayName = 'AmauiIconMaterialAutoReadPlayW100';

export default IconMaterialAutoReadPlayW100;
