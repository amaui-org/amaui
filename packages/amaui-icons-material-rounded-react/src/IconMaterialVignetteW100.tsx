import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVignetteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteW100'

      short_name='Vignette'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.35q2.2 0 3.775-1 1.575-1 1.575-2.35t-1.575-2.35q-1.575-1-3.775-1t-3.775 1Q6.65 10.65 6.65 12t1.575 2.35q1.575 1 3.775 1Zm0-.7q-1.9 0-3.275-.787Q7.35 13.075 7.35 12t1.375-1.863Q10.1 9.35 12 9.35t3.275.787q1.375.788 1.375 1.863t-1.375 1.863Q13.9 14.65 12 14.65ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Zm7.2-6Z"/>
    </Icon>
  );
});

IconMaterialVignetteW100.displayName = 'AmauiIconMaterialVignetteW100';

export default IconMaterialVignetteW100;
