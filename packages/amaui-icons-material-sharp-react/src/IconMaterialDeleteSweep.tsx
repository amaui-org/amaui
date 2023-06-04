import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteSweep = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweep'

      short_name='DeleteSweep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18v-2h4v2Zm0-8V8h7v2Zm0 4v-2h6v2ZM3 8H2V6h4V4.5h4V6h4v2h-1v11H3Zm2 0v9h6V8Zm0 0v9Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweep.displayName = 'AmauiIconMaterialDeleteSweep';

export default IconMaterialDeleteSweep;
