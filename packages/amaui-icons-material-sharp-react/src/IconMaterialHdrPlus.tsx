import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlus'

      short_name='HdrPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 17.5V16H13v-1.5h1.5V13H16v1.5h1.5V16H16v1.5ZM7 12V6h1.5v2h2V6H12v6h-1.5V9.5h-2V12Zm6 0V6h3q.6 0 1.05.45.45.45.45 1.05v3q0 .6-.45 1.05Q16.6 12 16 12Zm-2.5 3.5v-1h-2v1Zm-.05 3.5-.85-2H8.5v2H7v-6h3.5q.625 0 1.062.438.438.437.438 1.062v1q0 .45-.262.812-.263.363-.638.588L12 19Zm4.05-8.5H16v-3h-1.5ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialHdrPlus.displayName = 'AmauiIconMaterialHdrPlus';

export default IconMaterialHdrPlus;
