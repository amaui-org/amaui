import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionPushW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionPushW100Filled'

      short_name='TransitionPush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M407-212h-40q-5 0-9-4t-4-10q0-5 4.5-9t9.5-4h39q14 0 23-9t9-23v-417q0-14-9-23t-23-9h-39q-6 0-10-4t-4-10q0-6 4-10t10-4h39q26 0 43 17t17 43v416q0 26-17 43t-43 17Zm220 0q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h181q26 0 43 17t17 43v416q0 26-17 43t-43 17H627ZM300-466H106q-6 0-10-4t-4-10q0-6 4-10t10-4h194l-73-70q-4-4-4.5-9t3.5-10q4-5 9.5-4.5T246-583l86 82q5 5 7 10t2 11q0 6-2 11.5t-7 10.5l-85 82q-5 4-10.5 4t-9.5-4q-5-5-5-10.5t5-9.5l73-70Z"/>
    </Icon>
  );
});

IconMaterialTransitionPushW100Filled.displayName = 'AmauiIconMaterialTransitionPushW100Filled';

export default IconMaterialTransitionPushW100Filled;
