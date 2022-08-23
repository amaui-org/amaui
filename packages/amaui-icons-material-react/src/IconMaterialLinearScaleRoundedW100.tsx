import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinearScaleRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinearScaleRoundedW100'
      short_name='LinearScale'

      {...props}
    >
      <path d="M17.2 16.1Q15.575 16.1 14.45 15.075Q13.325 14.05 13.1 12.35H6.65Q6.525 13.025 6.013 13.512Q5.5 14 4.7 14Q3.875 14 3.288 13.412Q2.7 12.825 2.7 12Q2.7 11.175 3.288 10.587Q3.875 10 4.7 10Q5.5 10 6.013 10.488Q6.525 10.975 6.65 11.65H13.1Q13.325 9.95 14.45 8.925Q15.575 7.9 17.2 7.9Q18.9 7.9 20.1 9.125Q21.3 10.35 21.3 12.05Q21.3 13.7 20.1 14.9Q18.9 16.1 17.2 16.1ZM17.2 15.4Q18.6 15.4 19.6 14.4Q20.6 13.4 20.6 12Q20.6 10.6 19.6 9.6Q18.6 8.6 17.2 8.6Q15.8 8.6 14.8 9.6Q13.8 10.6 13.8 12Q13.8 13.4 14.8 14.4Q15.8 15.4 17.2 15.4Z"/>
    </Icon>
  );
});

IconMaterialLinearScaleRoundedW100.displayName = 'AmauiIconMaterialLinearScaleRoundedW100';

export default IconMaterialLinearScaleRoundedW100;
