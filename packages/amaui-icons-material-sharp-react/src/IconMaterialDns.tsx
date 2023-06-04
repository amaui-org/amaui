import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDns = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dns'

      short_name='Dns'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 6q-.625 0-1.062.438Q6 6.875 6 7.5t.438 1.062Q6.875 9 7.5 9t1.062-.438Q9 8.125 9 7.5t-.438-1.062Q8.125 6 7.5 6Zm0 10q-.625 0-1.062.438Q6 16.875 6 17.5t.438 1.062Q6.875 19 7.5 19t1.062-.438Q9 18.125 9 17.5t-.438-1.062Q8.125 16 7.5 16ZM3 12V3h18v9Zm2-7v5h14V5ZM3 22v-9h18v9Zm2-7v5h14v-5ZM5 5v5Zm0 10v5Z"/>
    </Icon>
  );
});

IconMaterialDns.displayName = 'AmauiIconMaterialDns';

export default IconMaterialDns;
