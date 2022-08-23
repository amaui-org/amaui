import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHistorySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistorySharp'
      short_name='History'

      {...props}
    >
      <path d="M12.95 21Q11.25 21 9.637 20.363Q8.025 19.725 6.7 18.4L8.1 17Q9.125 17.975 10.4 18.488Q11.675 19 13 19Q15.9 19 17.95 16.95Q20 14.9 20 12Q20 9.1 17.95 7.05Q15.9 5 13 5Q10.125 5 8.062 7.012Q6 9.025 6 12.2L7.85 10.35L9.25 11.75L5 16L0.75 11.75L2.2 10.35L4 12.2Q4 10.25 4.7 8.562Q5.4 6.875 6.625 5.637Q7.85 4.4 9.488 3.7Q11.125 3 13 3Q14.85 3 16.488 3.712Q18.125 4.425 19.35 5.65Q20.575 6.875 21.288 8.512Q22 10.15 22 12Q22 13.85 21.288 15.488Q20.575 17.125 19.35 18.35Q18.125 19.575 16.475 20.288Q14.825 21 12.95 21ZM15.8 16.2 12 12.4V7H14V11.6L17.2 14.8Z"/>
    </Icon>
  );
});

IconMaterialHistorySharp.displayName = 'AmauiIconMaterialHistorySharp';

export default IconMaterialHistorySharp;
