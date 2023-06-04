import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultilineChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultilineChartW100'

      short_name='MultilineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.475 17.65-.5-.5 6.45-6.5 3.95 3.95 3.85-4.3q-1.55-1.8-3.487-2.85Q11.8 6.4 9.575 6.4q-1.725 0-3.275.587-1.55.588-2.875 1.613l-.5-.5q1.4-1.125 3.088-1.763Q7.7 5.7 9.575 5.7q2.3 0 4.35 1.062 2.05 1.063 3.75 2.988l2.9-3.25.5.5-3 3.35q.8 1.2 1.363 2.637.562 1.438.787 2.913h-.7q-.2-1.125-.675-2.4-.475-1.275-1.225-2.6l-4.25 4.7-3.95-3.95Z"/>
    </Icon>
  );
});

IconMaterialMultilineChartW100.displayName = 'AmauiIconMaterialMultilineChartW100';

export default IconMaterialMultilineChartW100;
