import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestSunblock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestSunblock'

      short_name='NestSunblock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7V4h2v3Zm0 13v-3h2v3ZM7.25 9.175 5.825 7.75 7.95 5.625 9.375 7.05Zm.7 9.2L5.825 16.25l1.425-1.425 2.125 2.125ZM8 13v-2h6l-1.8-2.4 1.6-1.2L18 13Zm11 6V5h3v14ZM2 16v-2q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V8q1.65 0 2.825 1.175Q6 10.35 6 12q0 1.65-1.175 2.825Q3.65 16 2 16Z"/>
    </Icon>
  );
});

IconMaterialNestSunblock.displayName = 'AmauiIconMaterialNestSunblock';

export default IconMaterialNestSunblock;
