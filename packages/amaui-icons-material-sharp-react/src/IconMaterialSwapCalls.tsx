import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapCalls = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapCalls'

      short_name='SwapCalls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 19-4-4 1.4-1.45 1.6 1.6V8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8v7q0 .825.588 1.413Q14.175 17 15 17t1.413-.587Q17 15.825 17 15V7.85l-1.6 1.6L14 8l4-4 4 4-1.4 1.45-1.6-1.6V15q0 1.65-1.175 2.825Q16.65 19 15 19q-1.65 0-2.825-1.175Q11 16.65 11 15V8q0-.825-.587-1.412Q9.825 6 9 6q-.825 0-1.412.588Q7 7.175 7 8v7.15l1.6-1.6L10 15Z"/>
    </Icon>
  );
});

IconMaterialSwapCalls.displayName = 'AmauiIconMaterialSwapCalls';

export default IconMaterialSwapCalls;
