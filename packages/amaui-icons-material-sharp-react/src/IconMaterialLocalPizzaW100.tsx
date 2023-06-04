import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPizzaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaW100'

      short_name='LocalPizza'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.65 3.75 7.3q1.8-1.375 3.888-2.188Q9.725 4.3 12 4.3t4.363.8q2.087.8 3.887 2.2Zm0-1.25 7.3-10.95q-1.625-1.125-3.475-1.788Q13.975 5 12 5t-3.812.662Q6.35 6.325 4.7 7.45ZM8.65 9.25q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm3.35 5.1q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm0 4.05Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaW100.displayName = 'AmauiIconMaterialLocalPizzaW100';

export default IconMaterialLocalPizzaW100;
