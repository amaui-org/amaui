import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRebaseEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseEditFilled'

      short_name='RebaseEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.75 9.25-1.4-1.425L11.175 6h-3.35q-.225.65-.7 1.125T6 7.825v8.35q.875.325 1.438 1.087Q8 18.025 8 19q0 1.25-.875 2.125T5 22q-1.25 0-2.125-.875T2 19q0-.975.562-1.738Q3.125 16.5 4 16.175v-8.35Q3.125 7.5 2.562 6.737 2 5.975 2 5q0-1.25.875-2.125T5 2q.975 0 1.738.562Q7.5 3.125 7.825 4h3.35L9.35 2.175 10.75.75 15 5ZM19 2q1.25 0 2.125.875T22 5q0 1.25-.875 2.125T19 8q-1.25 0-2.125-.875T16 5q0-1.25.875-2.125T19 2Zm-3.6 10.4 2.1 2.1 2.125 2.125L14.25 22H10v-4.25Zm5.3 3.175L16.425 11.3l2.2-2.15 4.15 4.225Z"/>
    </Icon>
  );
});

IconMaterialRebaseEditFilled.displayName = 'AmauiIconMaterialRebaseEditFilled';

export default IconMaterialRebaseEditFilled;
