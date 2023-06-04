import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareW100Filled'

      short_name='Compare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.3 22v-2.3h-7V4.3h7V2h.7v20ZM5 18h6.3v-7.55Zm9 1.7V12l5 6V5h-5v-.7h5.7v15.4Z"/>
    </Icon>
  );
});

IconMaterialCompareW100Filled.displayName = 'AmauiIconMaterialCompareW100Filled';

export default IconMaterialCompareW100Filled;
