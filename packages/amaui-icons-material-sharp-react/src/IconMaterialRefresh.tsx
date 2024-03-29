import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRefresh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Refresh'

      short_name='Refresh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q1.725 0 3.3.713 1.575.712 2.7 2.037V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2Q13.625 6 12 6 9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325Q14.75 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialRefresh.displayName = 'AmauiIconMaterialRefresh';

export default IconMaterialRefresh;
