import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockFilled'

      short_name='Lock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V8h3V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h3v14ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Zm3 9q.825 0 1.413-.587Q14 15.825 14 15q0-.825-.587-1.413Q12.825 13 12 13q-.825 0-1.412.587Q10 14.175 10 15q0 .825.588 1.413Q11.175 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialLockFilled.displayName = 'AmauiIconMaterialLockFilled';

export default IconMaterialLockFilled;
