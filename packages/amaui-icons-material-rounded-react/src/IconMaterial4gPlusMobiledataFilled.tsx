import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gPlusMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gPlusMobiledataFilled'

      short_name='4gPlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 15q-.425 0-.712-.288Q20 14.425 20 14v-1h-1q-.425 0-.712-.288Q18 12.425 18 12t.288-.713Q18.575 11 19 11h1v-1q0-.425.288-.713Q20.575 9 21 9t.712.287Q22 9.575 22 10v1h1q.425 0 .712.287.288.288.288.713t-.288.712Q23.425 13 23 13h-1v1q0 .425-.288.712Q21.425 15 21 15ZM6 17q-.425 0-.713-.288Q5 16.425 5 16v-2H2q-.425 0-.712-.288Q1 13.425 1 13V8q0-.425.288-.713Q1.575 7 2 7t.713.287Q3 7.575 3 8v4h2V8q0-.425.287-.713Q5.575 7 6 7t.713.287Q7 7.575 7 8v4q.425 0 .713.287Q8 12.575 8 13t-.287.712Q7.425 14 7 14v2q0 .425-.287.712Q6.425 17 6 17Zm5 0q-.825 0-1.412-.587Q9 15.825 9 15V9q0-.825.588-1.413Q10.175 7 11 7h5q.425 0 .712.287Q17 7.575 17 8t-.288.712Q16.425 9 16 9h-5v6h4v-2h-1q-.425 0-.712-.288Q13 12.425 13 12t.288-.713Q13.575 11 14 11h2q.425 0 .712.287.288.288.288.713v3q0 .825-.587 1.413Q15.825 17 15 17Z"/>
    </Icon>
  );
});

IconMaterial4gPlusMobiledataFilled.displayName = 'AmauiIconMaterial4gPlusMobiledataFilled';

export default IconMaterial4gPlusMobiledataFilled;
