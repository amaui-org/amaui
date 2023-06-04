import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNumbersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NumbersW100'

      short_name='Numbers'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.475 18.8 1-4h-3.5l.175-.7h3.5L9.7 9.9H6.2l.175-.7h3.5l1-4h.65l-1 4h4.35l1-4h.65l-1 4h3.5l-.175.7h-3.5l-1.05 4.2h3.5l-.175.7h-3.5l-1 4h-.65l1-4h-4.35l-1 4ZM9.3 14.1h4.35l1.05-4.2h-4.35Z"/>
    </Icon>
  );
});

IconMaterialNumbersW100.displayName = 'AmauiIconMaterialNumbersW100';

export default IconMaterialNumbersW100;
