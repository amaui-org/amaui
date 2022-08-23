import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStreamSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamSharpFilled'
      short_name='Stream'

      {...props}
    >
      <path d="M20 14Q19.175 14 18.587 13.412Q18 12.825 18 12Q18 11.175 18.587 10.587Q19.175 10 20 10Q20.825 10 21.413 10.587Q22 11.175 22 12Q22 12.825 21.413 13.412Q20.825 14 20 14ZM4 14Q3.175 14 2.588 13.412Q2 12.825 2 12Q2 11.175 2.588 10.587Q3.175 10 4 10Q4.825 10 5.412 10.587Q6 11.175 6 12Q6 12.825 5.412 13.412Q4.825 14 4 14ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20Q10 19.175 10.588 18.587Q11.175 18 12 18Q12.825 18 13.413 18.587Q14 19.175 14 20Q14 20.825 13.413 21.413Q12.825 22 12 22ZM15.35 10.05 13.95 8.6 18.35 4.25 19.75 5.65ZM8.65 10 4.3 5.65 5.7 4.25 10.05 8.6ZM18.35 19.7 14 15.35 15.4 13.95 19.75 18.3ZM5.65 19.7 4.25 18.3 8.6 13.95 10 15.35ZM12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialStreamSharpFilled.displayName = 'AmauiIconMaterialStreamSharpFilled';

export default IconMaterialStreamSharpFilled;
