import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataFilled'

      short_name='GMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17q-.825 0-1.412-.587Q7 15.825 7 15V9q0-.825.588-1.413Q8.175 7 9 7h6q.425 0 .713.287Q16 7.575 16 8t-.287.712Q15.425 9 15 9H9v6h5v-2h-1q-.425 0-.712-.288Q12 12.425 12 12t.288-.713Q12.575 11 13 11h2q.425 0 .713.287.287.288.287.713v3q0 .825-.587 1.413Q14.825 17 14 17Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataFilled.displayName = 'AmauiIconMaterialGMobiledataFilled';

export default IconMaterialGMobiledataFilled;
