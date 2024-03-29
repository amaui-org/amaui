import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataFilled'

      short_name='4gMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q-.425 0-.713-.288Q7 16.425 7 16v-2H4q-.425 0-.712-.288Q3 13.425 3 13V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v4h2V8q0-.425.287-.713Q7.575 7 8 7t.713.287Q9 7.575 9 8v4h1q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 14 10 14H9v2q0 .425-.287.712Q8.425 17 8 17Zm6 0q-.825 0-1.412-.587Q12 15.825 12 15V9q0-.825.588-1.413Q13.175 7 14 7h6q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9h-6v6h5v-2h-1.5q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q17.075 11 17.5 11H20q.425 0 .712.287.288.288.288.713v3q0 .825-.587 1.413Q19.825 17 19 17Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataFilled.displayName = 'AmauiIconMaterial4gMobiledataFilled';

export default IconMaterial4gMobiledataFilled;
