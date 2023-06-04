import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeAddW100Filled'

      short_name='CakeAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7v-6.4h15.4v6.4Zm2-7.1V8.1h5.35V6.6q-.425-.275-.712-.613Q9.65 5.65 9.65 5.2q0-.275.1-.512.1-.238.3-.438L11 3.3l.95.95q.2.2.3.438.1.237.1.512 0 .45-.288.787-.287.338-.712.613v1.5h5.35v5.5ZM19 8V6h-2v-.7h2v-2h.7v2h2V6h-2v2Z"/>
    </Icon>
  );
});

IconMaterialCakeAddW100Filled.displayName = 'AmauiIconMaterialCakeAddW100Filled';

export default IconMaterialCakeAddW100Filled;
