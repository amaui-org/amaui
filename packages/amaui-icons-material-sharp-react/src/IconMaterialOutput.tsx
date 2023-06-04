import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Output'

      short_name='Output'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v4h-2V5H5v14h14v-2h2v4Zm14-4-1.4-1.4 2.575-2.6H9v-2h9.175L15.6 8.4 17 7l5 5Z"/>
    </Icon>
  );
});

IconMaterialOutput.displayName = 'AmauiIconMaterialOutput';

export default IconMaterialOutput;
