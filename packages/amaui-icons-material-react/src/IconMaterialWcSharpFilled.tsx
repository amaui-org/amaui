import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWcSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcSharpFilled'
      short_name='Wc'

      {...props}
    >
      <path d="M5.5 22V14.5H4V7H11V14.5H9.5V22ZM15 22V16H12L15 7H18L21 16H18V22ZM7.5 6Q6.675 6 6.088 5.412Q5.5 4.825 5.5 4Q5.5 3.175 6.088 2.587Q6.675 2 7.5 2Q8.325 2 8.913 2.587Q9.5 3.175 9.5 4Q9.5 4.825 8.913 5.412Q8.325 6 7.5 6ZM16.5 6Q15.675 6 15.088 5.412Q14.5 4.825 14.5 4Q14.5 3.175 15.088 2.587Q15.675 2 16.5 2Q17.325 2 17.913 2.587Q18.5 3.175 18.5 4Q18.5 4.825 17.913 5.412Q17.325 6 16.5 6Z"/>
    </Icon>
  );
});

IconMaterialWcSharpFilled.displayName = 'AmauiIconMaterialWcSharpFilled';

export default IconMaterialWcSharpFilled;
