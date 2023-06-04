import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCozyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCozyW100'

      short_name='ViewCozy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.05 10.75h2.7v-2.7h-2.7Zm5.2 0h2.7v-2.7h-2.7Zm-5.2 5.2h2.7v-2.7h-2.7Zm5.2 0h2.7v-2.7h-2.7ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialViewCozyW100.displayName = 'AmauiIconMaterialViewCozyW100';

export default IconMaterialViewCozyW100;
