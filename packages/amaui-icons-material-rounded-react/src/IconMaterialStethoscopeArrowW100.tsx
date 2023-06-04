import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStethoscopeArrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeArrowW100'

      short_name='StethoscopeArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.2 20.7q-2.175 0-3.7-1.512-1.525-1.513-1.525-3.688V15q-1.825-.125-3.087-1.475-1.263-1.35-1.263-3.225V5.7q0-.325.212-.538.213-.212.538-.212h2.25V4.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.65h-2.3v4.65q0 1.65 1.175 2.825Q6.675 14.3 8.325 14.3q1.65 0 2.825-1.175 1.175-1.175 1.175-2.825V5.65h-2.3v.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.65h2.25q.325 0 .537.212.213.213.213.538v4.6q0 1.875-1.263 3.225Q10.5 14.875 8.675 15v.5q0 1.875 1.325 3.188Q11.325 20 13.2 20Zm1.075-3.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H19l-1.975-2q-.1-.1-.1-.238 0-.137.1-.237.1-.1.25-.1t.25.1l2.3 2.3q.225.225.225.525 0 .3-.225.525l-2.3 2.3q-.1.1-.237.1-.138 0-.238-.1-.125-.1-.125-.238 0-.137.1-.237l1.975-2Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeArrowW100.displayName = 'AmauiIconMaterialStethoscopeArrowW100';

export default IconMaterialStethoscopeArrowW100;
