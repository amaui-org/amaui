import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBuildW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildW100Filled'

      short_name='Build'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.5 20.95-7.2-7.2q-.575.275-1.175.438-.6.162-1.275.162-2.225 0-3.788-1.563Q3.5 11.225 3.5 9q0-.575.112-1.113.113-.537.338-1.037l3.5 3.45 2.7-2.7-3.4-3.45q.5-.225 1.013-.363.512-.137 1.087-.137 2.225 0 3.788 1.562Q14.2 6.775 14.2 9q0 .725-.15 1.325t-.45 1.125l7.2 7.2Z"/>
    </Icon>
  );
});

IconMaterialBuildW100Filled.displayName = 'AmauiIconMaterialBuildW100Filled';

export default IconMaterialBuildW100Filled;
