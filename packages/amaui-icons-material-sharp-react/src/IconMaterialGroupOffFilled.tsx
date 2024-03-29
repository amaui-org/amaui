import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupOffFilled'

      short_name='GroupOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 23.3 17 19.825V20H1v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13q.3 0 .613.012.312.013.612.038L9.175 12H9q-1.65 0-2.825-1.175Q5 9.65 5 8v-.175L.675 3.5 2.1 2.075l19.8 19.8ZM16.65 13.15q1.275.15 2.4.512 1.125.363 2.1.888.9.5 1.375 1.112Q23 16.275 23 17v3h-.125l-4-4q-.225-.825-.787-1.562-.563-.738-1.438-1.288Zm-2.6-1.975q.475-.7.712-1.5Q15 8.875 15 8q0-1.05-.363-2.025Q14.275 5 13.6 4.2q.35-.125.7-.163Q14.65 4 15 4q1.65 0 2.825 1.175Q19 6.35 19 8q0 1.65-1.237 2.825Q16.525 12 14.875 12Zm-1.45-1.45L7.275 4.4q.4-.2.825-.3.425-.1.9-.1 1.65 0 2.825 1.175Q13 6.35 13 8q0 .475-.1.9-.1.425-.3.825Z"/>
    </Icon>
  );
});

IconMaterialGroupOffFilled.displayName = 'AmauiIconMaterialGroupOffFilled';

export default IconMaterialGroupOffFilled;
