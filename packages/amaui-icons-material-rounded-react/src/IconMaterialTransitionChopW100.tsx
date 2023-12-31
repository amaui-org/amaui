import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionChopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionChopW100'

      short_name='TransitionChop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-53 464-123q13-4 19.5-15t3.5-24l-76-293H192q-12 0-22 10t-10 22v423Zm14 25h594q12 0 22-10t10-22v-416q0-12-10-22t-22-10H600l74 286q6 24-6 46t-36 28L174-240Zm-14-480Z"/>
    </Icon>
  );
});

IconMaterialTransitionChopW100.displayName = 'AmauiIconMaterialTransitionChopW100';

export default IconMaterialTransitionChopW100;
