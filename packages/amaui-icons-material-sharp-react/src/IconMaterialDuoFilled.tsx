import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDuoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DuoFilled'

      short_name='Duo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2h8q.825 0 1.413.587Q22 3.175 22 4v8q0 2.075-.788 3.9-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-5-7h7v-2l3 2V9l-3 2V9H7Z"/>
    </Icon>
  );
});

IconMaterialDuoFilled.displayName = 'AmauiIconMaterialDuoFilled';

export default IconMaterialDuoFilled;
