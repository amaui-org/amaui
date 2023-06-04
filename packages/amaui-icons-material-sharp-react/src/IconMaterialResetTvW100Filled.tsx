import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvW100Filled'

      short_name='ResetTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 19.7v-2h-6V4.3h17.4v6.35h-9.45l2.5-2.5-.5-.5L9.9 11l3.35 3.35.5-.5-2.5-2.5h9.45v6.35h-6v2Z"/>
    </Icon>
  );
});

IconMaterialResetTvW100Filled.displayName = 'AmauiIconMaterialResetTvW100Filled';

export default IconMaterialResetTvW100Filled;
