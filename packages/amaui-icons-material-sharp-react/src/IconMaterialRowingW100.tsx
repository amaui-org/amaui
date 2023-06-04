import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRowingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RowingW100'

      short_name='Rowing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.45 19.65-.6-.6 4.675-4.675L11.5 16.35H8.75ZM15 5.35q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388ZM18.1 23l-2.35-2.35v-1.5l-7.5-7.5q-.225.05-.375.075-.15.025-.425.075v-.7q1.175-.15 2.725-.988 1.55-.837 2.225-1.562l1.3-1.35q.2-.225.525-.388.325-.162.625-.162.65 0 1.025.375.375.375.375 1.025V14q0 .725-.325 1.262-.325.538-.8.838l-1.875-1.875V8.7q-1.025 1.025-2.112 1.687Q10.05 11.05 9 11.4l7.25 7.25h1.5L20.1 21Z"/>
    </Icon>
  );
});

IconMaterialRowingW100.displayName = 'AmauiIconMaterialRowingW100';

export default IconMaterialRowingW100;
