import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCompact = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompact'

      short_name='ViewCompact'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19.75V4.25h20v15.5Zm2-11h2.5v-2.5H4Zm4.5 0H11v-2.5H8.5Zm4.5 0h2.5v-2.5H13Zm4.5 0H20v-2.5h-2.5Zm0 4.5H20v-2.5h-2.5Zm-4.5 0h2.5v-2.5H13Zm-4.5 0H11v-2.5H8.5Zm-2-2.5H4v2.5h2.5Zm11 7H20v-2.5h-2.5Zm-4.5 0h2.5v-2.5H13Zm-4.5 0H11v-2.5H8.5Zm-4.5 0h2.5v-2.5H4Z"/>
    </Icon>
  );
});

IconMaterialViewCompact.displayName = 'AmauiIconMaterialViewCompact';

export default IconMaterialViewCompact;
