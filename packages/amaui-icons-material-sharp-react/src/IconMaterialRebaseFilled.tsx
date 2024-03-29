import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRebaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseFilled'

      short_name='Rebase'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.75 23.25-1.4-1.425L11.175 20h-3.35q-.325.875-1.087 1.438Q5.975 22 5 22q-1.25 0-2.125-.875T2 19q0-.975.562-1.738Q3.125 16.5 4 16.175v-8.35Q3.125 7.5 2.562 6.737 2 5.975 2 5q0-1.25.875-2.125T5 2q.975 0 1.738.562Q7.5 3.125 7.825 4h3.35L9.35 2.175 10.75.75 15 5l-4.25 4.25-1.4-1.425L11.175 6h-3.35q-.225.65-.7 1.125T6 7.825v8.35q.65.225 1.125.7t.7 1.125h3.35L9.35 16.175l1.4-1.425L15 19ZM19 22q-1.25 0-2.125-.875T16 19q0-1 .562-1.762.563-.763 1.438-1.063v-8.35q-.875-.3-1.438-1.063Q16 6 16 5q0-1.25.875-2.125T19 2q1.25 0 2.125.875T22 5q0 1-.562 1.762-.563.763-1.438 1.063v8.35q.875.325 1.438 1.087Q22 18.025 22 19q0 1.25-.875 2.125T19 22Z"/>
    </Icon>
  );
});

IconMaterialRebaseFilled.displayName = 'AmauiIconMaterialRebaseFilled';

export default IconMaterialRebaseFilled;
