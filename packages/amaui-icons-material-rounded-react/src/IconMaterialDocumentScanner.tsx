import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDocumentScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScanner'

      short_name='DocumentScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 6q-.425 0-.712-.287Q2 5.425 2 5V2q0-.425.288-.713Q2.575 1 3 1h3q.425 0 .713.287Q7 1.575 7 2t-.287.712Q6.425 3 6 3H4v2q0 .425-.287.713Q3.425 6 3 6Zm18 0q-.425 0-.712-.287Q20 5.425 20 5V3h-2q-.425 0-.712-.288Q17 2.425 17 2t.288-.713Q17.575 1 18 1h3q.425 0 .712.287Q22 1.575 22 2v3q0 .425-.288.713Q21.425 6 21 6ZM3 23q-.425 0-.712-.288Q2 22.425 2 22v-3q0-.425.288-.712Q2.575 18 3 18t.713.288Q4 18.575 4 19v2h2q.425 0 .713.288Q7 21.575 7 22t-.287.712Q6.425 23 6 23Zm15 0q-.425 0-.712-.288Q17 22.425 17 22t.288-.712Q17.575 21 18 21h2v-2q0-.425.288-.712Q20.575 18 21 18t.712.288Q22 18.575 22 19v3q0 .425-.288.712Q21.425 23 21 23ZM7 18h10V6H7Zm0 2q-.825 0-1.412-.587Q5 18.825 5 18V6q0-.825.588-1.412Q6.175 4 7 4h10q.825 0 1.413.588Q19 5.175 19 6v12q0 .825-.587 1.413Q17.825 20 17 20Zm3-10h4q.425 0 .713-.288Q15 9.425 15 9t-.287-.713Q14.425 8 14 8h-4q-.425 0-.712.287Q9 8.575 9 9t.288.712Q9.575 10 10 10Zm0 3h4q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11h-4q-.425 0-.712.287Q9 11.575 9 12t.288.712Q9.575 13 10 13Zm0 3h4q.425 0 .713-.288Q15 15.425 15 15t-.287-.713Q14.425 14 14 14h-4q-.425 0-.712.287Q9 14.575 9 15t.288.712Q9.575 16 10 16Zm-3 2V6v12Z"/>
    </Icon>
  );
});

IconMaterialDocumentScanner.displayName = 'AmauiIconMaterialDocumentScanner';

export default IconMaterialDocumentScanner;
