import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelW100Filled'

      short_name='Cancel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 15.85q.125.125.25.125t.25-.125L12 12.5l3.375 3.375q.1.1.238.087.137-.012.237-.112.125-.125.125-.25t-.125-.25L12.5 12l3.375-3.375q.1-.1.088-.238-.013-.137-.113-.237-.125-.125-.25-.125t-.25.125L12 11.5 8.625 8.125q-.1-.1-.238-.088-.137.013-.237.113-.125.125-.125.25t.125.25L11.5 12l-3.375 3.375q-.1.1-.087.238.012.137.112.237ZM12 20.7q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3t3.413.675q1.587.675 2.762 1.85t1.85 2.762Q20.7 10.175 20.7 12q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Z"/>
    </Icon>
  );
});

IconMaterialCancelW100Filled.displayName = 'AmauiIconMaterialCancelW100Filled';

export default IconMaterialCancelW100Filled;
