import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallEndRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndRoundedFilled'
      short_name='CallEnd'

      {...props}
    >
      <path d="M12 8Q15.125 8 17.95 9.238Q20.775 10.475 22.9 12.75Q23.175 13.025 23.175 13.45Q23.175 13.875 22.9 14.15L20.6 16.4Q20.325 16.675 19.963 16.7Q19.6 16.725 19.3 16.5L16 14V10.65Q15.025 10.325 14.025 10.162Q13.025 10 12 10Q10.975 10 9.975 10.162Q8.975 10.325 8 10.65V14L4.7 16.5Q4.4 16.725 4.038 16.7Q3.675 16.675 3.4 16.4L1.1 14.15Q0.825 13.875 0.825 13.45Q0.825 13.025 1.1 12.75Q3.225 10.45 6.05 9.225Q8.875 8 12 8Z"/>
    </Icon>
  );
});

IconMaterialCallEndRoundedFilled.displayName = 'AmauiIconMaterialCallEndRoundedFilled';

export default IconMaterialCallEndRoundedFilled;
