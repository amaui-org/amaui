import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsRoundedW100'
      short_name='Mms'

      {...props}
    >
      <path d="M8.75 13.1H15.45Q15.725 13.1 15.825 12.875Q15.925 12.65 15.775 12.45L14 10.1Q13.875 9.95 13.688 9.95Q13.5 9.95 13.375 10.1L11.2 12.8L9.925 11.325Q9.8 11.175 9.613 11.188Q9.425 11.2 9.3 11.35L8.45 12.45Q8.3 12.65 8.4 12.875Q8.5 13.1 8.75 13.1ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7ZM4 17.8 5.8 16H19.2Q19.55 16 19.775 15.775Q20 15.55 20 15.2V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8ZM4 4.8Q4 4.45 4 4.225Q4 4 4 4Q4 4 4 4.225Q4 4.45 4 4.8V15.2Q4 15.55 4 15.775Q4 16 4 16V17.8Z"/>
    </Icon>
  );
});

IconMaterialMmsRoundedW100.displayName = 'AmauiIconMaterialMmsRoundedW100';

export default IconMaterialMmsRoundedW100;
