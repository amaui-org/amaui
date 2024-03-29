import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertPageBreakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreakFilled'

      short_name='InsertPageBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20v-3h16v3q0 .825-.587 1.413Q18.825 22 18 22Zm8-13h4l-5-5v4q0 .425.288.712Q13.575 9 14 9Zm-4 6q-.425 0-.712-.288Q9 14.425 9 14t.288-.713Q9.575 13 10 13h4q.425 0 .713.287.287.288.287.713t-.287.712Q14.425 15 14 15Zm8 0q-.425 0-.712-.288Q17 14.425 17 14t.288-.713Q17.575 13 18 13h4q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 15 22 15ZM2 15q-.425 0-.712-.288Q1 14.425 1 14t.288-.713Q1.575 13 2 13h4q.425 0 .713.287Q7 13.575 7 14t-.287.712Q6.425 15 6 15Zm2-4V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V11Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreakFilled.displayName = 'AmauiIconMaterialInsertPageBreakFilled';

export default IconMaterialInsertPageBreakFilled;
