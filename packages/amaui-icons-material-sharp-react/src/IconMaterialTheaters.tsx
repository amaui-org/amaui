import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTheaters = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Theaters'

      short_name='Theaters'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V3h2v2h2V3h8v2h2V3h2v18h-2v-2h-2v2H8v-2H6v2Zm2-4h2v-2H6Zm0-4h2v-2H6Zm0-4h2V7H6Zm10 8h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V7h-2Zm-6 10h4V5h-4Zm0-14h4Z"/>
    </Icon>
  );
});

IconMaterialTheaters.displayName = 'AmauiIconMaterialTheaters';

export default IconMaterialTheaters;
