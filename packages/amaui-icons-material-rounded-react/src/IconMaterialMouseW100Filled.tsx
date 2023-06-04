import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseW100Filled'

      short_name='Mouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-2.375 0-4.037-1.662Q6.3 17.375 6.3 15V9.8h11.4V15q0 2.375-1.662 4.038Q14.375 20.7 12 20.7ZM6.3 9.1q0-2.275 1.55-3.925t3.8-1.775v5.7Zm6.05 0V3.4q2.25.125 3.8 1.775Q17.7 6.825 17.7 9.1Z"/>
    </Icon>
  );
});

IconMaterialMouseW100Filled.displayName = 'AmauiIconMaterialMouseW100Filled';

export default IconMaterialMouseW100Filled;
