import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFortFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortFilled'

      short_name='Fort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21q-.825 0-1.412-.587Q1 19.825 1 19v-1.175q0-.4.15-.763.15-.362.425-.637L3 15V9L1.575 7.575Q1.3 7.3 1.15 6.938 1 6.575 1 6.175V4q0-.425.288-.713Q1.575 3 2 3t.713.287Q3 3.575 3 4v1h2V4q0-.425.287-.713Q5.575 3 6 3t.713.287Q7 3.575 7 4v1h2V4q0-.425.288-.713Q9.575 3 10 3t.713.287Q11 3.575 11 4v2.175q0 .4-.15.763-.15.362-.425.637L9 9v1h6V9l-1.425-1.425q-.275-.275-.425-.637-.15-.363-.15-.763V4q0-.425.288-.713Q13.575 3 14 3t.713.287Q15 3.575 15 4v1h2V4q0-.425.288-.713Q17.575 3 18 3t.712.287Q19 3.575 19 4v1h2V4q0-.425.288-.713Q21.575 3 22 3t.712.287Q23 3.575 23 4v2.175q0 .4-.15.763-.15.362-.425.637L21 9v6l1.425 1.425q.275.275.425.637.15.363.15.763V19q0 .825-.587 1.413Q21.825 21 21 21h-7v-3q0-.825-.587-1.413Q12.825 16 12 16q-.825 0-1.412.587Q10 17.175 10 18v3Z"/>
    </Icon>
  );
});

IconMaterialFortFilled.displayName = 'AmauiIconMaterialFortFilled';

export default IconMaterialFortFilled;
