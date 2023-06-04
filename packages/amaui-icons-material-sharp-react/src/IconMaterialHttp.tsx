import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHttp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Http'

      short_name='Http'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 15V9h1.5v2h2V9H6v6H4.5v-2.5h-2V15Zm7.5 0v-4.5H7V9h4.5v1.5H10V15Zm5.5 0v-4.5h-1.5V9H17v1.5h-1.5V15Zm4 0V9h5v4h-3.5v2Zm1.5-3.5h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialHttp.displayName = 'AmauiIconMaterialHttp';

export default IconMaterialHttp;
