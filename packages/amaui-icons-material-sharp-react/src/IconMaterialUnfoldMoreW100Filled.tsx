import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreW100Filled'

      short_name='UnfoldMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.05 8.35 16.4l.5-.5L12 19.05l3.15-3.15.5.5ZM8.85 8.1l-.5-.5L12 3.95l3.65 3.65-.5.5L12 4.95Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreW100Filled.displayName = 'AmauiIconMaterialUnfoldMoreW100Filled';

export default IconMaterialUnfoldMoreW100Filled;
