import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAspectRatioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioW100Filled'

      short_name='AspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 11.35q.15 0 .25-.1t.1-.25V8.35h2.675q.125 0 .225-.1t.1-.25q0-.15-.1-.25T9 7.65H6.4q-.325 0-.537.212-.213.213-.213.538v2.625q0 .125.1.225t.25.1Zm9 5h2.6q.325 0 .538-.213.212-.212.212-.537v-2.625q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v2.65h-2.675q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioW100Filled.displayName = 'AmauiIconMaterialAspectRatioW100Filled';

export default IconMaterialAspectRatioW100Filled;
