import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinorCrashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinorCrashFilled'

      short_name='MinorCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.1 2.7 1.6 1.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L5.7 4.1q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275Zm11.2 1.4-1.6 1.6q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l1.6-1.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7ZM13 1v3q0 .425-.287.712Q12.425 5 12 5t-.712-.288Q11 4.425 11 4V1q0-.425.288-.713Q11.575 0 12 0t.713.287Q13 .575 13 1ZM4 24q-.425 0-.712-.288Q3 23.425 3 23v-8l2.1-6q.15-.45.538-.725Q6.025 8 6.5 8h11q.475 0 .863.275.387.275.537.725l2.1 6v8q0 .425-.288.712Q20.425 24 20 24h-1q-.425 0-.712-.288Q18 23.425 18 23v-1H6v1q0 .425-.287.712Q5.425 24 5 24Zm1.8-11h12.4l-1.05-3H6.85Zm1.7 6q.625 0 1.062-.438Q9 18.125 9 17.5t-.438-1.062Q8.125 16 7.5 16t-1.062.438Q6 16.875 6 17.5t.438 1.062Q6.875 19 7.5 19Zm9 0q.625 0 1.062-.438Q18 18.125 18 17.5t-.438-1.062Q17.125 16 16.5 16t-1.062.438Q15 16.875 15 17.5t.438 1.062Q15.875 19 16.5 19Z"/>
    </Icon>
  );
});

IconMaterialMinorCrashFilled.displayName = 'AmauiIconMaterialMinorCrashFilled';

export default IconMaterialMinorCrashFilled;
