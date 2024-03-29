import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContrast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Contrast'

      short_name='Contrast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm1-2.075q2.975-.375 4.988-2.613Q20 15.075 20 12t-2.012-5.313Q15.975 4.45 13 4.075Z"/>
    </Icon>
  );
});

IconMaterialContrast.displayName = 'AmauiIconMaterialContrast';

export default IconMaterialContrast;
