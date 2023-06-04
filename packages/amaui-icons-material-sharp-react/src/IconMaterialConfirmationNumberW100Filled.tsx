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
      <path d="M3.3 18.7v-3.65q.9-.425 1.45-1.238Q5.3 13 5.3 12t-.55-1.812Q4.2 9.375 3.3 8.95V5.3h17.4v3.65q-.9.425-1.45 1.238Q18.7 11 18.7 12t.55 1.812q.55.813 1.45 1.238v3.65Zm8.35-2.6h.7v-.7h-.7Zm0-3.75h.7v-.7h-.7Zm0-3.75h.7v-.7h-.7Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberW100Filled.displayName = 'AmauiIconMaterialConfirmationNumberW100Filled';

export default IconMaterialConfirmationNumberW100Filled;
