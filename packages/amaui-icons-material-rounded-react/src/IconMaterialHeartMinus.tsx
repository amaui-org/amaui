import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartMinus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartMinus'

      short_name='HeartMinus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11.475ZM11 21l-3.175-2.85q-1.8-1.625-3.087-2.9-1.288-1.275-2.125-2.4-.838-1.125-1.225-2.175Q1 9.625 1 8.475q0-2.35 1.575-3.913Q4.15 3 6.5 3q1.3 0 2.475.55T11 5.1q.85-1 2.025-1.55Q14.2 3 15.5 3q2.1 0 3.825 1.475t1.725 4q0 .35-.05.737-.05.388-.15.788h-2.125q.125-.45.2-.85.075-.4.075-.75 0-1.875-1.25-2.638Q16.5 5 15.5 5q-1.275 0-2.2.688-.925.687-1.725 1.812h-1.15Q9.65 6.375 8.663 5.688 7.675 5 6.5 5q-1.425 0-2.463.987Q3 6.975 3 8.475q0 .825.35 1.675.35.85 1.25 1.963.9 1.112 2.45 2.599Q8.6 16.2 11 18.3q.65-.575 1.525-1.325.875-.75 1.4-1.25l.225.225.487.488.488.487.225.225q-.55.5-1.4 1.237-.85.738-1.5 1.313Zm4-7v-2h8v2Z"/>
    </Icon>
  );
});

IconMaterialHeartMinus.displayName = 'AmauiIconMaterialHeartMinus';

export default IconMaterialHeartMinus;
