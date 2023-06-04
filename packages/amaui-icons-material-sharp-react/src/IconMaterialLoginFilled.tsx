import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoginFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginFilled'

      short_name='Login'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 17-1.375-1.45 2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5Zm2 4v-2h7V5h-7V3h9v18Z"/>
    </Icon>
  );
});

IconMaterialLoginFilled.displayName = 'AmauiIconMaterialLoginFilled';

export default IconMaterialLoginFilled;
