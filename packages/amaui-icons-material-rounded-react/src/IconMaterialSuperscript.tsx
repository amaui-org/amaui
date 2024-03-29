import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSuperscript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Superscript'

      short_name='Superscript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 9q-.425 0-.712-.288Q19 8.425 19 8V7q0-.425.288-.713Q19.575 6 20 6h2V5h-2.5q-.2 0-.35-.15Q19 4.7 19 4.5q0-.2.15-.35.15-.15.35-.15H22q.425 0 .712.287Q23 4.575 23 5v1q0 .425-.288.713Q22.425 7 22 7h-2v1h2.5q.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15ZM7.925 20q-.675 0-.987-.575-.313-.575.037-1.15l3.525-5.55-3.2-5q-.35-.575-.037-1.15Q7.575 6 8.225 6q.3 0 .55.137.25.138.4.388L11.95 11h.1l2.75-4.475q.15-.275.363-.4Q15.375 6 15.75 6q.675 0 .975.575.3.575-.05 1.15l-3.2 5 3.55 5.525q.35.575.025 1.163-.325.587-.975.587-.3 0-.55-.137-.25-.138-.4-.388l-3.075-4.9h-.1l-3.075 4.9q-.175.275-.375.4T7.925 20Z"/>
    </Icon>
  );
});

IconMaterialSuperscript.displayName = 'AmauiIconMaterialSuperscript';

export default IconMaterialSuperscript;
