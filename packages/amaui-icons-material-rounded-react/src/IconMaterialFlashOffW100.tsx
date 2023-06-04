import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffW100'

      short_name='FlashOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.35 12.85-1.5-1.5h1.075q.425 0 .65.375.225.375 0 .75ZM13.1 10.6 7.5 5v-.75q0-.325.213-.538.212-.212.537-.212h6.85q.425 0 .638.337.212.338.037.713Zm6.95 10.45L14.1 15.1l-3.2 5.525q-.15.275-.45.187-.3-.087-.3-.387V14h-1.9q-.325 0-.537-.213-.213-.212-.213-.537V8.5L3.9 4.9q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.15 16.15q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialFlashOffW100.displayName = 'AmauiIconMaterialFlashOffW100';

export default IconMaterialFlashOffW100;
