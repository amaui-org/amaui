import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsActiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveW100Filled'

      short_name='NotificationsActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 10q-.15 0-.25-.1t-.1-.25q.075-1.725.8-3.288.725-1.562 2-2.762.1-.1.238-.113.137-.012.262.113.1.1.113.237.012.138-.113.238-1.175 1.1-1.85 2.537Q4.075 8.05 4 9.65q0 .15-.1.25t-.25.1Zm16.7 0q-.15 0-.25-.1t-.1-.25q-.075-1.6-.737-3.025Q18.6 5.2 17.425 4.1q-.125-.125-.125-.263 0-.137.125-.262.1-.1.238-.1.137 0 .237.1 1.275 1.2 2 2.775.725 1.575.8 3.3 0 .15-.1.25t-.25.1ZM5 18.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5v-.7q0-.375.237-.613.238-.237.613-.237t.613.237q.237.238.237.613V5q2 .35 3.25 1.887 1.25 1.538 1.25 3.413v7.65H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 2.85q-.6 0-1.05-.425-.45-.425-.45-1.075h3q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveW100Filled.displayName = 'AmauiIconMaterialNotificationsActiveW100Filled';

export default IconMaterialNotificationsActiveW100Filled;
