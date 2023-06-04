import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsVolleyballW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsVolleyballW100'

      short_name='SportsVolleyball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 10.45q-.575-2.725-2.65-4.525-2.075-1.8-4.85-1.925v2ZM7.35 14.3l4.3-2.5V4q-1.175.125-2.262.475Q8.3 4.825 7.35 5.5ZM4.9 15.7l1.75-1V6.05q-1.325 1.1-1.988 2.662Q4 10.275 4 12q0 .975.2 1.912.2.938.7 1.788Zm3.75 3.6 7.65-4.4-4.3-2.5-6.75 3.9q.6 1 1.463 1.787.862.788 1.937 1.213ZM12 20q2.05 0 3.838-.988 1.787-.987 2.912-2.712l-1.75-1-7.5 4.3q.575.25 1.213.325Q11.35 20 12 20Zm7.1-4.3q.55-1.025.775-2.138.225-1.112.075-2.262l-7.6-4.5v5ZM12 12Zm0 8.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialSportsVolleyballW100.displayName = 'AmauiIconMaterialSportsVolleyballW100';

export default IconMaterialSportsVolleyballW100;
