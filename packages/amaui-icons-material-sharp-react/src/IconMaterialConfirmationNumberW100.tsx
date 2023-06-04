import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConfirmationNumberW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberW100'

      short_name='ConfirmationNumber'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7v-3.65q.9-.425 1.45-1.238Q5.3 13 5.3 12t-.55-1.812Q4.2 9.375 3.3 8.95V5.3h17.4v3.65q-.9.425-1.45 1.238Q18.7 11 18.7 12t.55 1.812q.55.813 1.45 1.238v3.65ZM4 18h16v-2.55q-.925-.55-1.462-1.462Q18 13.075 18 12t.538-1.988Q19.075 9.1 20 8.55V6H4v2.55q.925.55 1.463 1.462Q6 10.925 6 12t-.537 1.988Q4.925 14.9 4 15.45Zm7.65-1.9h.7v-.7h-.7Zm0-3.75h.7v-.7h-.7Zm0-3.75h.7v-.7h-.7ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberW100.displayName = 'AmauiIconMaterialConfirmationNumberW100';

export default IconMaterialConfirmationNumberW100;
