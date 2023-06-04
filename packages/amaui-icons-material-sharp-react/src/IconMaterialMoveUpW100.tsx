import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveUpW100'

      short_name='MoveUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19.35q-2.65 0-4.5-1.85T1.65 13q0-2.825 2.088-4.6 2.087-1.775 4.987-1.775l-2.2-2.2.5-.5L10.1 7l-3.075 3.075-.5-.5 2.25-2.25Q5.9 7.4 4.125 8.962 2.35 10.525 2.35 13q0 2.35 1.65 4t4 1.65h2.35v.7Zm5.65-9v-5.7h7.7v5.7Zm0 9v-5.7h7.7v5.7Zm.7-.7h6.3v-4.3h-6.3Z"/>
    </Icon>
  );
});

IconMaterialMoveUpW100.displayName = 'AmauiIconMaterialMoveUpW100';

export default IconMaterialMoveUpW100;
