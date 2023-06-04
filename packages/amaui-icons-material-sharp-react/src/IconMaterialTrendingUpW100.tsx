import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUpW100'

      short_name='TrendingUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.275 17.35-.5-.5 6.5-6.55 4 4 6.8-6.7h-3.55v-.7h4.7v4.7h-.7V8.1l-7.25 7.25-4-4Z"/>
    </Icon>
  );
});

IconMaterialTrendingUpW100.displayName = 'AmauiIconMaterialTrendingUpW100';

export default IconMaterialTrendingUpW100;
