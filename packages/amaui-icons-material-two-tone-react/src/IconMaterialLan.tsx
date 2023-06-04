import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lan'

      short_name='Lan'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M10,7V4h4v3H10z M9,17v3H5v-3H9z M19,17v3h-4v-3H19z" opacity=".3"/><path d="M13,22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3V22z M10,7V4h4v3H10z M9,17v3H5v-3H9z M19,17v3h-4v-3H19z"/></g>
    </Icon>
  );
});

IconMaterialLan.displayName = 'AmauiIconMaterialLan';

export default IconMaterialLan;
