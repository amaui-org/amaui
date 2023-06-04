import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandContentW100Filled'

      short_name='ExpandContent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 17.7V13H7v4h4v.7ZM17.7 11H17V7h-4v-.7h4.7Z"/>
    </Icon>
  );
});

IconMaterialExpandContentW100Filled.displayName = 'AmauiIconMaterialExpandContentW100Filled';

export default IconMaterialExpandContentW100Filled;
