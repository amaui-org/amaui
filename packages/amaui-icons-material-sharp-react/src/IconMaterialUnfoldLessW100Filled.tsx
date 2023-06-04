import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessW100Filled'

      short_name='UnfoldLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.9 19.1-.5-.5L12 15l3.6 3.6-.5.5L12 16ZM12 9 8.4 5.4l.5-.5L12 8l3.1-3.1.5.5Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessW100Filled.displayName = 'AmauiIconMaterialUnfoldLessW100Filled';

export default IconMaterialUnfoldLessW100Filled;
