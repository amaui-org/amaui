import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionSlideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionSlideW100'

      short_name='TransitionSlide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h70q26 0 43 17t17 43v416q0 26-17 43t-43 17h-70Zm0-27h70q14 0 23-9t9-23v-418q0-14-9-23t-23-9h-70q-14 0-23 9t-9 23v418q0 14 9 23t23 9Zm290 27q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h366q26 0 43 17t17 43v416q0 26-17 43t-43 17H442Zm0-27h366q14 0 23-9t9-23v-418q0-14-9-23t-23-9H442q-14 0-23 9t-9 23v418q0 14 9 23t23 9Zm-188 0v-482 482Zm156 0v-482 482Z"/>
    </Icon>
  );
});

IconMaterialTransitionSlideW100.displayName = 'AmauiIconMaterialTransitionSlideW100';

export default IconMaterialTransitionSlideW100;
