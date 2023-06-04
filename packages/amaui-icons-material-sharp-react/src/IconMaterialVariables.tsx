import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariables = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Variables'

      short_name='Variables'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 17v-3h-3v-2h3V9h2v3h3v2h-3v3ZM3 14V4h18v3h-2V6H5v6h9v2Zm2-4V6v6-2Z"/>
    </Icon>
  );
});

IconMaterialVariables.displayName = 'AmauiIconMaterialVariables';

export default IconMaterialVariables;
