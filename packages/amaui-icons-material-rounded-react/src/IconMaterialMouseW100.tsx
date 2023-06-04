import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseW100'

      short_name='Mouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-2.375 0-4.037-1.662Q6.3 17.375 6.3 15V9.1q0-2.375 1.663-4.038Q9.625 3.4 12 3.4t4.038 1.662Q17.7 6.725 17.7 9.1V15q0 2.375-1.662 4.038Q14.375 20.7 12 20.7Zm.35-11.6H17q0-2.025-1.363-3.45-1.362-1.425-3.287-1.55ZM7 9.1h4.65v-5q-1.925.125-3.287 1.55Q7 7.075 7 9.1ZM12 20q2.075 0 3.538-1.462Q17 17.075 17 15V9.8H7V15q0 2.075 1.463 3.538Q9.925 20 12 20Zm0-10.2Zm.35-.7Zm-.7 0Zm.35.7Z"/>
    </Icon>
  );
});

IconMaterialMouseW100.displayName = 'AmauiIconMaterialMouseW100';

export default IconMaterialMouseW100;
