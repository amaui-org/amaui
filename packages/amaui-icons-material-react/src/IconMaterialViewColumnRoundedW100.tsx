import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnRoundedW100'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M4.3 16.2V7.8Q4.3 7.175 4.738 6.738Q5.175 6.3 5.8 6.3H18.2Q18.825 6.3 19.263 6.738Q19.7 7.175 19.7 7.8V16.2Q19.7 16.825 19.263 17.262Q18.825 17.7 18.2 17.7H5.8Q5.175 17.7 4.738 17.262Q4.3 16.825 4.3 16.2ZM5.8 17H8.4Q8.7 17 8.95 16.75Q9.2 16.5 9.2 16.2V7.8Q9.2 7.5 8.95 7.25Q8.7 7 8.4 7H5.8Q5.5 7 5.25 7.25Q5 7.5 5 7.8V16.2Q5 16.5 5.25 16.75Q5.5 17 5.8 17ZM10.7 17H13.3Q13.6 17 13.85 16.75Q14.1 16.5 14.1 16.2V7.8Q14.1 7.5 13.85 7.25Q13.6 7 13.3 7H10.7Q10.4 7 10.15 7.25Q9.9 7.5 9.9 7.8V16.2Q9.9 16.5 10.15 16.75Q10.4 17 10.7 17ZM15.6 17H18.2Q18.5 17 18.75 16.75Q19 16.5 19 16.2V7.8Q19 7.5 18.75 7.25Q18.5 7 18.2 7H15.6Q15.3 7 15.05 7.25Q14.8 7.5 14.8 7.8V16.2Q14.8 16.5 15.05 16.75Q15.3 17 15.6 17Z"/>
    </Icon>
  );
});

IconMaterialViewColumnRoundedW100.displayName = 'AmauiIconMaterialViewColumnRoundedW100';

export default IconMaterialViewColumnRoundedW100;
