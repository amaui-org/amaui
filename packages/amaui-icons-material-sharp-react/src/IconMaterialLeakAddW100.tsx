import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeakAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakAddW100'

      short_name='LeakAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 13.5v-.7q1.775 0 3.313-.663 1.537-.662 2.699-1.825Q11.475 9.15 12.138 7.6q.662-1.55.662-3.3h.7q0 1.9-.725 3.587-.725 1.688-1.963 2.925Q9.575 12.05 7.9 12.775q-1.675.725-3.6.725Zm0-4v-.7q1.875 0 3.188-1.313Q8.8 6.175 8.8 4.3h.7Q9.5 6.5 8 8T4.3 9.5Zm0-4V4.3h1.2q0 .5-.35.85t-.85.35Zm6.2 14.2q0-1.925.725-3.6t1.963-2.912q1.237-1.238 2.925-1.963Q17.8 10.5 19.7 10.5v.7q-1.75 0-3.3.662-1.55.663-2.712 1.826-1.163 1.162-1.825 2.699-.663 1.538-.663 3.313Zm4 0q0-2.2 1.5-3.7t3.7-1.5v.7q-1.875 0-3.188 1.312Q15.2 17.825 15.2 19.7Zm4 0q0-.5.35-.85t.85-.35v1.2Z"/>
    </Icon>
  );
});

IconMaterialLeakAddW100.displayName = 'AmauiIconMaterialLeakAddW100';

export default IconMaterialLeakAddW100;
