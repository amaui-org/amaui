import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailW100'

      short_name='Hail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.7q-.675 0-1.137-.463Q10.4 4.775 10.4 4.1t.463-1.138Q11.325 2.5 12 2.5t1.138.462q.462.463.462 1.138 0 .675-.462 1.137Q12.675 5.7 12 5.7Zm-1.95 15.65V8.475Q8.4 8.9 7.513 9.95 6.625 11 6.4 12.85h-.7q.225-2.6 1.888-3.95Q9.25 7.55 12 7.55q2.65 0 4.075-.738Q17.5 6.075 17.65 3.55h.7q-.075 2.1-1.175 3.262-1.1 1.163-3.225 1.338v13.2h-.7V15.5h-2.5v5.85Zm-4.9 0v-4.7h1.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialHailW100.displayName = 'AmauiIconMaterialHailW100';

export default IconMaterialHailW100;
