import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAndroidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidFilled'

      short_name='Android'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 18q.225-2.675 1.638-4.925Q4.05 10.825 6.4 9.5L4.55 6.3q-.15-.225-.075-.475.075-.25.325-.375.2-.125.45-.05t.4.3L7.5 8.9Q9.65 8 12 8t4.5.9l1.85-3.2q.15-.225.4-.3.25-.075.45.05.25.125.325.375.075.25-.075.475L17.6 9.5q2.35 1.325 3.763 3.575Q22.775 15.325 23 18Zm6-2.75q.525 0 .888-.363.362-.362.362-.887t-.362-.887Q7.525 12.75 7 12.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm10 0q.525 0 .888-.363.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Z"/>
    </Icon>
  );
});

IconMaterialAndroidFilled.displayName = 'AmauiIconMaterialAndroidFilled';

export default IconMaterialAndroidFilled;
