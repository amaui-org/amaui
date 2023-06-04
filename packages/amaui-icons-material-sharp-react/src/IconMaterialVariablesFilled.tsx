import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariablesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesFilled'

      short_name='Variables'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 17v-3h-3v-2h3V9h2v3h3v2h-3v3ZM3 14V4h18v3h-4v3h-3v4Z"/>
    </Icon>
  );
});

IconMaterialVariablesFilled.displayName = 'AmauiIconMaterialVariablesFilled';

export default IconMaterialVariablesFilled;
