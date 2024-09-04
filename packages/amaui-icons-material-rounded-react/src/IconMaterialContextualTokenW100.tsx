import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualTokenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenW100'

      short_name='ContextualToken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M310-354h154q13 0 21.5-8.5T494-384v-6q0-13-8.5-21.5T464-420H310q-13 0-21.5 8.5T280-390v6q0 13 8.5 21.5T310-354Zm334 0h6q13 0 21.5-8.5T680-384v-192q0-13-8.5-21.5T650-606h-6q-13 0-21.5 8.5T614-576v192q0 13 8.5 21.5T644-354ZM310-540h154q13 0 21.5-8.5T494-570v-6q0-13-8.5-21.5T464-606H310q-13 0-21.5 8.5T280-576v6q0 13 8.5 21.5T310-540ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenW100.displayName = 'AmauiIconMaterialContextualTokenW100';

export default IconMaterialContextualTokenW100;
