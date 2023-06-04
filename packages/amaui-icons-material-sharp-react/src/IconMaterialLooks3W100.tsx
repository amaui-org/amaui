import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3W100'

      short_name='Looks3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 16.35h4.7v-8.7h-4.7v.7h4v3.3h-2.5v.7h2.5v3.3h-4ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialLooks3W100.displayName = 'AmauiIconMaterialLooks3W100';

export default IconMaterialLooks3W100;
