import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks6W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6W100'

      short_name='Looks6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.35 11.65v-3.3h3v-.7h-3.7v8.7h4.7v-4.7Zm0 .7h3.3v3.3h-3.3ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialLooks6W100.displayName = 'AmauiIconMaterialLooks6W100';

export default IconMaterialLooks6W100;
