import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapCallsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapCallsSharp'
      short_name='SwapCalls'

      {...props}
    >
      <path d="M6 19 2 15 3.4 13.55 5 15.15V8Q5 6.35 6.175 5.175Q7.35 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8V15Q13 15.825 13.588 16.413Q14.175 17 15 17Q15.825 17 16.413 16.413Q17 15.825 17 15V7.85L15.4 9.45L14 8L18 4L22 8L20.6 9.45L19 7.85V15Q19 16.65 17.825 17.825Q16.65 19 15 19Q13.35 19 12.175 17.825Q11 16.65 11 15V8Q11 7.175 10.413 6.588Q9.825 6 9 6Q8.175 6 7.588 6.588Q7 7.175 7 8V15.15L8.6 13.55L10 15Z"/>
    </Icon>
  );
});

IconMaterialSwapCallsSharp.displayName = 'AmauiIconMaterialSwapCallsSharp';

export default IconMaterialSwapCallsSharp;
