import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultilineChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultilineChartFilled'

      short_name='MultilineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 18.5 2 17.05l7.5-7.5 4 4 2.9-3.25q-1.275-1.5-3-2.375T9.6 7.05q-1.775 0-3.35.663Q4.675 8.375 3.4 9.5L2 8.05q1.55-1.4 3.475-2.2 1.925-.8 4.125-.8 2.45 0 4.525.987Q16.2 7.025 17.75 8.8l2.85-3.25L22 7l-3 3.4q.825 1.325 1.338 2.875.512 1.55.662 3.275h-2q-.15-1.25-.512-2.388-.363-1.137-.938-2.162l-3.95 4.45-4.1-4.05Z"/>
    </Icon>
  );
});

IconMaterialMultilineChartFilled.displayName = 'AmauiIconMaterialMultilineChartFilled';

export default IconMaterialMultilineChartFilled;
