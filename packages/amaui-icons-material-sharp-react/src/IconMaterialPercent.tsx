import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPercent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Percent'

      short_name='Percent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 11q-1.45 0-2.475-1.025Q4 8.95 4 7.5q0-1.45 1.025-2.475Q6.05 4 7.5 4q1.45 0 2.475 1.025Q11 6.05 11 7.5q0 1.45-1.025 2.475Q8.95 11 7.5 11Zm0-2q.625 0 1.062-.438Q9 8.125 9 7.5t-.438-1.062Q8.125 6 7.5 6t-1.062.438Q6 6.875 6 7.5t.438 1.062Q6.875 9 7.5 9Zm9 11q-1.45 0-2.475-1.025Q13 17.95 13 16.5q0-1.45 1.025-2.475Q15.05 13 16.5 13q1.45 0 2.475 1.025Q20 15.05 20 16.5q0 1.45-1.025 2.475Q17.95 20 16.5 20Zm0-2q.625 0 1.062-.438Q18 17.125 18 16.5t-.438-1.062Q17.125 15 16.5 15t-1.062.438Q15 15.875 15 16.5t.438 1.062Q15.875 18 16.5 18ZM5.4 20 4 18.6 18.6 4 20 5.4Z"/>
    </Icon>
  );
});

IconMaterialPercent.displayName = 'AmauiIconMaterialPercent';

export default IconMaterialPercent;
