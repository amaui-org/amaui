import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataObjectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObjectFilled'

      short_name='DataObject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20v-6H2v-4h2V4h6v2H6v5.5H4v1h2V18h4v2Zm10 0v-2h4v-5.5h2v-1h-2V6h-4V4h6v6h2v4h-2v6Z"/>
    </Icon>
  );
});

IconMaterialDataObjectFilled.displayName = 'AmauiIconMaterialDataObjectFilled';

export default IconMaterialDataObjectFilled;
