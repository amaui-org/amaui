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
      <path d="M3.3 18.7V5.3h17.4v13.4ZM20 11.65V6H4v5.65ZM9.2 18H20v-5.65H9.2ZM4 18h4.5v-5.65H4Z"/>
    </Icon>
  );
});

IconMaterialViewComfyW100.displayName = 'AmauiIconMaterialViewComfyW100';

export default IconMaterialViewComfyW100;
