import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLdaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LdaW100Filled'

      short_name='Lda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.675 6.5 14.5q-.2-.1-.325-.288-.125-.187-.125-.412v-2.05q0-.325.213-.538Q6.475 11 6.8 11h4.85V8H9.8q-.325 0-.538-.213-.212-.212-.212-.537v-2.4q0-.325.212-.538.213-.212.538-.212h4.4q.325 0 .538.212.212.213.212.538v2.4q0 .325-.212.537Q14.525 8 14.2 8h-1.85v3h4.85q.325 0 .538.212.212.213.212.538v2.05q0 .225-.125.412-.125.188-.325.288l-5.15 2.175v2.775q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm0-.775v-4.2h-4.9v2.125Zm.7 0 4.9-2.075V11.7h-4.9Z"/>
    </Icon>
  );
});

IconMaterialLdaW100Filled.displayName = 'AmauiIconMaterialLdaW100Filled';

export default IconMaterialLdaW100Filled;
