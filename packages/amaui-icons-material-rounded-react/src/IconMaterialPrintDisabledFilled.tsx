import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledFilled'

      short_name='PrintDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 15v4h8v-.15L12.15 15Zm11.85 2H21q.425 0 .712-.288Q22 16.425 22 16v-5q0-1.275-.862-2.137Q20.275 8 19 8h-8.15ZM18 12.5q-.425 0-.712-.288Q17 11.925 17 11.5t.288-.713q.287-.287.712-.287t.712.287q.288.288.288.713t-.288.712q-.287.288-.712.288ZM18 7H9.85l-4-4H17q.425 0 .712.287Q18 3.575 18 4ZM6 17H3q-.425 0-.712-.288Q2 16.425 2 16v-5q0-1.275.875-2.137Q3.75 8 5 8h.15L2.075 4.925q-.3-.3-.3-.7 0-.4.325-.725.275-.275.7-.275.425 0 .725.275l16.975 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3l-2.5-2.5L18 18v1q0 .825-.587 1.413Q16.825 21 16 21H8q-.825 0-1.412-.587Q6 19.825 6 19Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledFilled.displayName = 'AmauiIconMaterialPrintDisabledFilled';

export default IconMaterialPrintDisabledFilled;
