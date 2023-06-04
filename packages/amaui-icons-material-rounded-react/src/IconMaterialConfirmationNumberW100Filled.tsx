import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConfirmationNumberW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberW100Filled'

      short_name='ConfirmationNumber'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18.7q-.275 0-.487-.213Q3.3 18.275 3.3 18v-2.95q.9-.425 1.45-1.238Q5.3 13 5.3 12t-.55-1.812Q4.2 9.375 3.3 8.95V6q0-.275.213-.488Q3.725 5.3 4 5.3h16q.275 0 .488.212.212.213.212.488v2.95q-.9.425-1.45 1.238Q18.7 11 18.7 12t.55 1.812q.55.813 1.45 1.238V18q0 .275-.212.487-.213.213-.488.213Zm8-2.6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3.75q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3.75q.15 0 .25-.1t.1-.25q0-.15-.1-.25T12 7.9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberW100Filled.displayName = 'AmauiIconMaterialConfirmationNumberW100Filled';

export default IconMaterialConfirmationNumberW100Filled;
