import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBusFilled'

      short_name='DirectionsBus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21v-3.05q-.45-.5-.725-1.113Q4 16.225 4 15.5V6q0-2.075 1.925-3.038Q7.85 2 12 2q4.3 0 6.15.925Q20 3.85 20 6v9.5q0 .725-.275 1.337-.275.613-.725 1.113V21h-3v-2H8v2Zm1-11h12V7H6Zm2.5 6q.625 0 1.062-.438Q10 15.125 10 14.5t-.438-1.062Q9.125 13 8.5 13t-1.062.438Q7 13.875 7 14.5t.438 1.062Q7.875 16 8.5 16Zm7 0q.625 0 1.062-.438Q17 15.125 17 14.5t-.438-1.062Q16.125 13 15.5 13t-1.062.438Q14 13.875 14 14.5t.438 1.062Q14.875 16 15.5 16Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBusFilled.displayName = 'AmauiIconMaterialDirectionsBusFilled';

export default IconMaterialDirectionsBusFilled;
