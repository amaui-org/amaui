import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOffRoundedFilled'
      short_name='ThumbDownOff'

      {...props}
    >
      <path d="M21 15Q20.15 15 19.575 14.425Q19 13.85 19 13.025V5Q19 4.175 19.587 3.587Q20.175 3 21 3Q21.85 3 22.425 3.575Q23 4.15 23 4.975V13Q23 13.825 22.413 14.412Q21.825 15 21 15ZM10.875 21.95Q10.45 22.375 9.825 22.375Q9.2 22.375 8.775 21.95Q8.5 21.675 8.387 21.312Q8.275 20.95 8.35 20.575L9.3 16H3Q2.2 16 1.6 15.4Q1 14.8 1 14V12Q1 11.825 1.038 11.625Q1.075 11.425 1.15 11.25L4.175 4.2Q4.45 3.6 5.013 3.3Q5.575 3 6.175 3H15Q15.825 3 16.413 3.587Q17 4.175 17 5V15Q17 15.4 16.85 15.762Q16.7 16.125 16.425 16.4Z"/>
    </Icon>
  );
});

IconMaterialThumbDownOffRoundedFilled.displayName = 'AmauiIconMaterialThumbDownOffRoundedFilled';

export default IconMaterialThumbDownOffRoundedFilled;
