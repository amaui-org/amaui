import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLastPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageW100'

      short_name='LastPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 17.1-.5-.5 4.6-4.6-4.6-4.6.5-.5 5.1 5.1Zm9.65.25V6.65h.7v10.7Z"/>
    </Icon>
  );
});

IconMaterialLastPageW100.displayName = 'AmauiIconMaterialLastPageW100';

export default IconMaterialLastPageW100;
