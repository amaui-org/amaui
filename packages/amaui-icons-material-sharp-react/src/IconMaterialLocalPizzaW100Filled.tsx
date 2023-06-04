import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPizzaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaW100Filled'

      short_name='LocalPizza'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.65 3.75 7.3q1.8-1.375 3.888-2.188Q9.725 4.3 12 4.3t4.363.8q2.087.8 3.887 2.2ZM8.65 9.25q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm3.35 5.1q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaW100Filled.displayName = 'AmauiIconMaterialLocalPizzaW100Filled';

export default IconMaterialLocalPizzaW100Filled;
