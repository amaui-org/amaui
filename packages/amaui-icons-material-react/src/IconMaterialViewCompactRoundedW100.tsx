import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactRoundedW100'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M3.3 17.2V6.8Q3.3 6.175 3.737 5.738Q4.175 5.3 4.8 5.3H19.2Q19.825 5.3 20.263 5.738Q20.7 6.175 20.7 6.8V17.2Q20.7 17.825 20.263 18.262Q19.825 18.7 19.2 18.7H4.8Q4.175 18.7 3.737 18.262Q3.3 17.825 3.3 17.2ZM20 11.65V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V11.65Q4 11.65 4 11.65Q4 11.65 4 11.65H20Q20 11.65 20 11.65Q20 11.65 20 11.65ZM9.2 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V12.35Q20 12.35 20 12.35Q20 12.35 20 12.35H9.2Q9.2 12.35 9.2 12.35Q9.2 12.35 9.2 12.35V18Q9.2 18 9.2 18Q9.2 18 9.2 18ZM4.8 18H8.5Q8.5 18 8.5 18Q8.5 18 8.5 18V12.35Q8.5 12.35 8.5 12.35Q8.5 12.35 8.5 12.35H4Q4 12.35 4 12.35Q4 12.35 4 12.35V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialViewCompactRoundedW100.displayName = 'AmauiIconMaterialViewCompactRoundedW100';

export default IconMaterialViewCompactRoundedW100;
