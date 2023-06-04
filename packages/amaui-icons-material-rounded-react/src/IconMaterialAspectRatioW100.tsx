import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAspectRatioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioW100'

      short_name='AspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 11.35q.15 0 .25-.1t.1-.25V8.35h2.675q.125 0 .225-.1t.1-.25q0-.15-.1-.25T9 7.65H6.4q-.325 0-.537.212-.213.213-.213.538v2.625q0 .125.1.225t.25.1Zm9 5h2.6q.325 0 .538-.213.212-.212.212-.537v-2.625q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v2.65h-2.675q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7q-.35 0-.575-.225Q4 17.55 4 17.2V6.8q0-.35.225-.575Q4.45 6 4.8 6q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Zm0 0h14.4q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioW100.displayName = 'AmauiIconMaterialAspectRatioW100';

export default IconMaterialAspectRatioW100;
