import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyRoundedFilled'
      short_name='Reply'

      {...props}
    >
      <path d="M20 19Q19.575 19 19.288 18.712Q19 18.425 19 18V15Q19 13.75 18.125 12.875Q17.25 12 16 12H6.8L9.725 14.925Q10 15.2 10 15.6Q10 16 9.7 16.3Q9.425 16.575 9 16.575Q8.575 16.575 8.3 16.3L3.7 11.7Q3.55 11.55 3.488 11.375Q3.425 11.2 3.425 11Q3.425 10.8 3.488 10.625Q3.55 10.45 3.7 10.3L8.325 5.675Q8.6 5.4 9 5.4Q9.4 5.4 9.7 5.7Q9.975 5.975 9.975 6.4Q9.975 6.825 9.7 7.1L6.8 10H16Q18.075 10 19.538 11.462Q21 12.925 21 15V18Q21 18.425 20.712 18.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialReplyRoundedFilled.displayName = 'AmauiIconMaterialReplyRoundedFilled';

export default IconMaterialReplyRoundedFilled;
