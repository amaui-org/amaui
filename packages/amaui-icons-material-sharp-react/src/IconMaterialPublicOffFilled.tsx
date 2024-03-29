import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublicOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicOffFilled'

      short_name='PublicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-2.95-2.95q-1.2.8-2.587 1.225Q13.55 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.55.425-2.938.425-1.387 1.225-2.587L.675 3.5 2.1 2.075l19.8 19.8ZM11 19.95V18q-.825 0-1.412-.587Q9 16.825 9 16v-1l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.025 1.988 5.3Q7.975 19.575 11 19.95Zm9.35-2.475-1.45-1.45q.525-.925.812-1.938Q20 13.075 20 12q0-2.45-1.362-4.475Q17.275 5.5 15 4.6V5q0 .825-.587 1.412Q13.825 7 13 7h-2v1.125L6.525 3.65q1.2-.775 2.575-1.212Q10.475 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.525-.438 2.9-.437 1.375-1.212 2.575Z"/>
    </Icon>
  );
});

IconMaterialPublicOffFilled.displayName = 'AmauiIconMaterialPublicOffFilled';

export default IconMaterialPublicOffFilled;
