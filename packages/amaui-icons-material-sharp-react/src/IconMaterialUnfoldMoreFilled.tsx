import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreFilled'

      short_name='UnfoldMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45ZM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreFilled.displayName = 'AmauiIconMaterialUnfoldMoreFilled';

export default IconMaterialUnfoldMoreFilled;
