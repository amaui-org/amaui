import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxW100'

      short_name='AddBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.35h.7v-4h4v-.7h-4v-4h-.7v4h-4v.7h4ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialAddBoxW100.displayName = 'AmauiIconMaterialAddBoxW100';

export default IconMaterialAddBoxW100;
