import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubscript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subscript'

      short_name='Subscript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 20q-.425 0-.712-.288Q19 19.425 19 19v-1q0-.425.288-.712Q19.575 17 20 17h2v-1h-2.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15H22q.425 0 .712.287.288.288.288.713v1q0 .425-.288.712Q22.425 18 22 18h-2v1h2.5q.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm-9.5-9.275-3.2-5q-.35-.575-.037-1.15Q7.575 4 8.225 4q.3 0 .55.137.25.138.4.388L11.95 9h.1l2.75-4.475q.15-.275.4-.4T15.75 4q.675 0 .975.575.3.575-.05 1.15l-3.2 5 3.55 5.525q.35.575.025 1.163-.325.587-.975.587-.3 0-.55-.137-.25-.138-.4-.388l-3.075-4.9h-.1l-3.075 4.9q-.175.275-.412.4-.238.125-.538.125-.675 0-.987-.575-.313-.575.037-1.15Z"/>
    </Icon>
  );
});

IconMaterialSubscript.displayName = 'AmauiIconMaterialSubscript';

export default IconMaterialSubscript;
