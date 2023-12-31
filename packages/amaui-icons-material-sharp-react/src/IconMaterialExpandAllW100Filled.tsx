import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandAllW100Filled'

      short_name='ExpandAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-116 276-320l20-20 184 182 184-182 20 20-204 204ZM296-620l-20-20 204-204 204 204-20 20-184-182-184 182Z"/>
    </Icon>
  );
});

IconMaterialExpandAllW100Filled.displayName = 'AmauiIconMaterialExpandAllW100Filled';

export default IconMaterialExpandAllW100Filled;
