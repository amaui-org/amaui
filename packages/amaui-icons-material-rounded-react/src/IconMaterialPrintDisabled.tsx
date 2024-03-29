import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabled'

      short_name='PrintDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17H3q-.425 0-.712-.288Q2 16.425 2 16v-5q0-1.275.875-2.137Q3.75 8 5 8h.15L2.075 4.925q-.3-.3-.3-.7 0-.4.325-.725.275-.275.7-.275.425 0 .725.275l16.975 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3l-2.5-2.5L18 18v1q0 .825-.587 1.413Q16.825 21 16 21H8q-.825 0-1.412-.587Q6 19.825 6 19Zm2-2v4h8v-.15L12.15 15Zm11.85 2-2-2H20v-4q0-.425-.288-.713Q19.425 10 19 10h-6.15l-2-2H19q1.275 0 2.138.863Q22 9.725 22 11v5q0 .425-.288.712Q21.425 17 21 17ZM16 8V5H7.85l-2-2H17q.425 0 .712.287Q18 3.575 18 4v4ZM4 15h2v-2h4.15l-3-3H5q-.425 0-.713.287Q4 10.575 4 11Zm14-2.5q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q18.425 10.5 18 10.5t-.712.287Q17 11.075 17 11.5t.288.712q.287.288.712.288ZM5 10h2.15H4h1Zm14 0h1-7.15Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabled.displayName = 'AmauiIconMaterialPrintDisabled';

export default IconMaterialPrintDisabled;
