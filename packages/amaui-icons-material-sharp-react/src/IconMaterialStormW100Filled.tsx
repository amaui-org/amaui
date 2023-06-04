import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStormW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StormW100Filled'

      short_name='Storm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.85 20.85q.65-1.875.763-3.775.112-1.9-.113-3.475-.45 2.125-2.262 3.612Q14.425 18.7 12 18.7q-2.075 0-3.487-.912Q7.1 16.875 6.238 15.4q-.863-1.475-1.225-3.363Q4.65 10.15 4.65 8.2q0-1.275.188-2.538Q5.025 4.4 5.4 3.15h.75q-.675 2.225-.775 3.95-.1 1.725.125 3.3.45-2.125 2.263-3.613Q9.575 5.3 12 5.3q2.075 0 3.488.913 1.412.912 2.275 2.387.862 1.475 1.225 3.362.362 1.888.362 3.838 0 1.275-.187 2.537-.188 1.263-.563 2.513ZM12 14.7q1.125 0 1.913-.788.787-.787.787-1.912t-.787-1.913Q13.125 9.3 12 9.3t-1.912.787Q9.3 10.875 9.3 12t.788 1.912q.787.788 1.912.788Zm0-.7q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialStormW100Filled.displayName = 'AmauiIconMaterialStormW100Filled';

export default IconMaterialStormW100Filled;
