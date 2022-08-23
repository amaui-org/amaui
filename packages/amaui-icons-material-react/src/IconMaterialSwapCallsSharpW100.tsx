import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapCallsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapCallsSharpW100'
      short_name='SwapCalls'

      {...props}
    >
      <path d="M6 18.35 2.9 15.25 3.4 14.75 5.65 17V8Q5.65 6.6 6.625 5.625Q7.6 4.65 9 4.65Q10.4 4.65 11.375 5.625Q12.35 6.6 12.35 8V15Q12.35 16.125 13.113 16.887Q13.875 17.65 15 17.65Q16.125 17.65 16.888 16.887Q17.65 16.125 17.65 15V6L15.4 8.25L14.9 7.75L18 4.65L21.1 7.75L20.6 8.25L18.35 6V15Q18.35 16.4 17.375 17.375Q16.4 18.35 15 18.35Q13.6 18.35 12.625 17.375Q11.65 16.4 11.65 15V8Q11.65 6.875 10.887 6.112Q10.125 5.35 9 5.35Q7.875 5.35 7.113 6.112Q6.35 6.875 6.35 8V17L8.6 14.75L9.1 15.25Z"/>
    </Icon>
  );
});

IconMaterialSwapCallsSharpW100.displayName = 'AmauiIconMaterialSwapCallsSharpW100';

export default IconMaterialSwapCallsSharpW100;
