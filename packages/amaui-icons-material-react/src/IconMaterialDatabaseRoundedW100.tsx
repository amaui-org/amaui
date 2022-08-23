import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatabaseRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseRoundedW100'
      short_name='Database'

      {...props}
    >
      <path d="M12 11.85Q8.5 11.85 6.075 10.875Q3.65 9.9 3.65 8.5Q3.65 7.1 6.075 6.125Q8.5 5.15 12 5.15Q15.5 5.15 17.925 6.125Q20.35 7.1 20.35 8.5Q20.35 9.9 17.925 10.875Q15.5 11.85 12 11.85ZM12 15.55Q8.5 15.55 6.075 14.575Q3.65 13.6 3.65 12.2V12.15Q4.175 12.575 5.025 12.975Q5.875 13.375 6.963 13.675Q8.05 13.975 9.338 14.162Q10.625 14.35 12 14.35Q13.375 14.35 14.663 14.162Q15.95 13.975 17.038 13.675Q18.125 13.375 18.975 12.975Q19.825 12.575 20.35 12.15V12.2Q20.35 13.6 17.925 14.575Q15.5 15.55 12 15.55ZM12 19.25Q8.5 19.25 6.075 18.275Q3.65 17.3 3.65 15.9V15.85Q4.175 16.275 5.025 16.675Q5.875 17.075 6.963 17.375Q8.05 17.675 9.338 17.863Q10.625 18.05 12 18.05Q13.375 18.05 14.663 17.863Q15.95 17.675 17.038 17.375Q18.125 17.075 18.975 16.675Q19.825 16.275 20.35 15.85V15.9Q20.35 17.3 17.925 18.275Q15.5 19.25 12 19.25Z"/>
    </Icon>
  );
});

IconMaterialDatabaseRoundedW100.displayName = 'AmauiIconMaterialDatabaseRoundedW100';

export default IconMaterialDatabaseRoundedW100;
