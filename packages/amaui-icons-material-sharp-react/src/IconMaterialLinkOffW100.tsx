import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOffW100'

      short_name='LinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.35 15.55 17.8 15q.95-.275 1.6-1.113.65-.837.65-1.887 0-1.275-.912-2.188-.913-.912-2.188-.912h-3.5v-.7h3.5q1.575 0 2.688 1.112Q20.75 10.425 20.75 12q0 1.275-.675 2.162-.675.888-1.725 1.388Zm-3.2-3.2-.7-.7h.85v.7Zm5.55 9.35L2.3 3.3l.5-.5 18.4 18.4Zm-10.15-5.9h-3.5q-1.575 0-2.687-1.112Q3.25 13.575 3.25 12q0-1.575 1.113-2.688Q5.475 8.2 7.05 8.2h.65l.7.7H7.05q-1.275 0-2.187.912-.913.913-.913 2.188 0 1.275.913 2.188.912.912 2.187.912h3.5ZM8.7 12.35v-.7h2.45l.675.7Z"/>
    </Icon>
  );
});

IconMaterialLinkOffW100.displayName = 'AmauiIconMaterialLinkOffW100';

export default IconMaterialLinkOffW100;
