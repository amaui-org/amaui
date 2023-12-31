import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThreadUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThreadUnreadW100'

      short_name='ThreadUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M748-653q-39 0-66.5-27.5T654-747q0-39 27.5-66.5T748-841q39 0 66.5 27.5T842-747q0 39-27.5 66.5T748-653ZM549-172q-44 0-70.5-27T452-271q0-66 58.5-116.5T654-446q-5-56-23.5-81.5T577-553q-36 0-73 26.5T413-434q-52 65-87.5 91T255-317q-38 0-60.5-26.5T172-416q0-42 19-89.5T250-609q28-39 39.5-63t11.5-41q0-14-7.5-20.5T272-740q-11 0-23 5.5T223-718q-8 7-17.5 7t-16.5-7q-8-7-8-16.5t8-16.5q21-19 42-28t41-9q34 0 55.5 21t21.5 54q0 26-13.5 56T287-577q-35 51-51 89.5T220-416q0 23 10 37t25 14q13 0 26.5-7t30.5-22q13-11 27.5-28t34.5-40q64-77 109-108t93-31q56 0 89 41t37 114h63q10 0 17 7t7 17q0 10-7 17t-17 7h-63q-6 103-48 164.5T549-172Zm0-48q43 0 72-49t33-129q-63 5-108.5 42.5T500-272q0 23 13 37.5t36 14.5Z"/>
    </Icon>
  );
});

IconMaterialThreadUnreadW100.displayName = 'AmauiIconMaterialThreadUnreadW100';

export default IconMaterialThreadUnreadW100;
