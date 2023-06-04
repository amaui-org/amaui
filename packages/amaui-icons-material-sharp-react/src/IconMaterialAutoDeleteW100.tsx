import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteW100'

      short_name='AutoDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 6v13Zm3.75 13.7H6.3V6h-1v-.7H9v-.7h6v.7h3.7V6h-1v4.225q-.15-.025-.35-.025H17V6H7v13h3.5q.05.2.125.387l.125.313Zm-.9-2.7h.35q0-.9.175-1.537l.175-.638V8h-.7Zm3.6-5.8q.15-.1.338-.2.187-.1.362-.175V8h-.7ZM17 21.8q-2 0-3.4-1.4T12.2 17q0-2 1.4-3.4t3.4-1.4q2 0 3.4 1.4t1.4 3.4q0 2-1.4 3.4T17 21.8Zm1.65-2.65.5-.5-1.8-1.8v-2.7h-.7v3Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteW100.displayName = 'AmauiIconMaterialAutoDeleteW100';

export default IconMaterialAutoDeleteW100;
