import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandCircleDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleDown'

      short_name='ExpandCircleDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.3 14.8q.3.3.7.3.4 0 .7-.3l3.1-3.1q.275-.275.262-.7-.012-.425-.287-.7-.3-.3-.7-.3-.4 0-.7.3L12 12.675l-2.4-2.4q-.275-.275-.7-.263-.425.013-.7.288-.3.3-.3.7 0 .4.3.7ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleDown.displayName = 'AmauiIconMaterialExpandCircleDown';

export default IconMaterialExpandCircleDown;
