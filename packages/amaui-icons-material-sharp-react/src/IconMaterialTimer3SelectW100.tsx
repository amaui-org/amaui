import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer3SelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3SelectW100'

      short_name='Timer3Select'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 17.85v-.7h6v-4.8h-6v-.7h6v-4.8h-6v-.7h6.7v11.7Zm10 0v-.7h4v-2.3h-4v-3.7h4.7v.7h-4v2.3h4v3.7Z"/>
    </Icon>
  );
});

IconMaterialTimer3SelectW100.displayName = 'AmauiIconMaterialTimer3SelectW100';

export default IconMaterialTimer3SelectW100;
