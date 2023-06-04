import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentActorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsW100'

      short_name='RecentActors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17.7V6.3h11.4v11.4Zm5.7-.7Zm-5-.8q1.1-.725 2.35-1.138 1.25-.412 2.65-.412t2.65.412q1.25.413 2.35 1.138V7h-10ZM17 17.7V6.3h.7v11.4Zm4.3 0V6.3h.7v11.4ZM7.7 12.85q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Zm0-2.35ZM2.8 17h9.8q-1.1-.8-2.362-1.225-1.263-.425-2.513-.425-1.275 0-2.537.412Q3.925 16.175 2.8 17Zm4.9-4.85q.7 0 1.175-.488.475-.487.475-1.162 0-.7-.475-1.175Q8.4 8.85 7.7 8.85q-.675 0-1.162.475Q6.05 9.8 6.05 10.5q0 .675.488 1.162.487.488 1.162.488Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsW100.displayName = 'AmauiIconMaterialRecentActorsW100';

export default IconMaterialRecentActorsW100;
