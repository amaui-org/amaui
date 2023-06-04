import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabUnselectedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselectedFilled'

      short_name='TabUnselected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 20v-2h2v2ZM8 6V4h2v2Zm4 4V4h10v6Zm6 10v-2h2v-2h2v4Zm-8 0v-2h2v2Zm10-6v-2h2v2ZM2 16v-2h2v2Zm0-4v-2h2v2Zm0 8v-2h2v2ZM2 8V4h4v2H4v2Zm4 12v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialTabUnselectedFilled.displayName = 'AmauiIconMaterialTabUnselectedFilled';

export default IconMaterialTabUnselectedFilled;
