import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMotionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionFilled'

      short_name='AutoAwesomeMotion'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 14q-.425 0-.712-.288Q2 13.425 2 13V4q0-.825.588-1.413Q3.175 2 4 2h9q.425 0 .713.287Q14 2.575 14 3t-.287.712Q13.425 4 13 4H4v9q0 .425-.287.712Q3.425 14 3 14Zm4 4q-.425 0-.713-.288Q6 17.425 6 17V8q0-.825.588-1.412Q7.175 6 8 6h9q.425 0 .712.287Q18 6.575 18 7t-.288.713Q17.425 8 17 8H8v9q0 .425-.287.712Q7.425 18 7 18Zm13 4h-8q-.825 0-1.412-.587Q10 20.825 10 20v-8q0-.825.588-1.413Q11.175 10 12 10h8q.825 0 1.413.587Q22 11.175 22 12v8q0 .825-.587 1.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionFilled.displayName = 'AmauiIconMaterialAutoAwesomeMotionFilled';

export default IconMaterialAutoAwesomeMotionFilled;
