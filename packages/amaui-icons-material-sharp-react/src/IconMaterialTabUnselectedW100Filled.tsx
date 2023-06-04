import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabUnselectedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselectedW100Filled'

      short_name='TabUnselected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18.7V18h2v.7ZM8 6v-.7h2V6Zm4 4V5.3h8.7V10Zm7 8.7V18h1v-2h.7v2.7Zm-8 0V18h2v.7Zm9-4.7v-2h.7v2ZM3.3 15v-2H4v2Zm0-4V9H4v2Zm0 7.7V17H4v1h1v.7ZM3.3 7V5.3H6V6H4v1ZM7 18.7V18h2v.7Z"/>
    </Icon>
  );
});

IconMaterialTabUnselectedW100Filled.displayName = 'AmauiIconMaterialTabUnselectedW100Filled';

export default IconMaterialTabUnselectedW100Filled;
