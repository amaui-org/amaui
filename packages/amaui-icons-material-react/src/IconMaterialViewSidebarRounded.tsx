import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewSidebarRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarRounded'
      short_name='ViewSidebar'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM17.5 8.675H20Q20 8.675 20 8.675Q20 8.675 20 8.675V6Q20 6 20 6Q20 6 20 6H17.5Q17.5 6 17.5 6Q17.5 6 17.5 6V8.675Q17.5 8.675 17.5 8.675Q17.5 8.675 17.5 8.675ZM17.5 13.325H20Q20 13.325 20 13.325Q20 13.325 20 13.325V10.675Q20 10.675 20 10.675Q20 10.675 20 10.675H17.5Q17.5 10.675 17.5 10.675Q17.5 10.675 17.5 10.675V13.325Q17.5 13.325 17.5 13.325Q17.5 13.325 17.5 13.325ZM4 18H15.5Q15.5 18 15.5 18Q15.5 18 15.5 18V6Q15.5 6 15.5 6Q15.5 6 15.5 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM17.5 18H20Q20 18 20 18Q20 18 20 18V15.325Q20 15.325 20 15.325Q20 15.325 20 15.325H17.5Q17.5 15.325 17.5 15.325Q17.5 15.325 17.5 15.325V18Q17.5 18 17.5 18Q17.5 18 17.5 18Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarRounded.displayName = 'AmauiIconMaterialViewSidebarRounded';

export default IconMaterialViewSidebarRounded;
