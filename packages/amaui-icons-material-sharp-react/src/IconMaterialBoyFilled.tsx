import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoyFilled'

      short_name='Boy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 7.5q-.725 0-1.238-.513-.512-.512-.512-1.237 0-.725.512-1.238Q11.275 4 12 4t1.238.512q.512.513.512 1.238t-.512 1.237Q12.725 7.5 12 7.5ZM10 20v-5H9v-4.5q0-.825.588-1.413Q10.175 8.5 11 8.5h2q.825 0 1.413.587Q15 9.675 15 10.5V15h-1v5Z"/>
    </Icon>
  );
});

IconMaterialBoyFilled.displayName = 'AmauiIconMaterialBoyFilled';

export default IconMaterialBoyFilled;
