import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumn'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z" opacity=".3"/><path d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z"/>
    </Icon>
  );
});

IconMaterialViewColumn.displayName = 'AmauiIconMaterialViewColumn';

export default IconMaterialViewColumn;
