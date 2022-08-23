import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnRounded'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M3 17V7Q3 6.175 3.587 5.588Q4.175 5 5 5H18.975Q19.8 5 20.388 5.588Q20.975 6.175 20.975 7V17Q20.975 17.825 20.388 18.413Q19.8 19 18.975 19H5Q4.175 19 3.587 18.413Q3 17.825 3 17ZM5 17H8.325Q8.325 17 8.325 17Q8.325 17 8.325 17V7Q8.325 7 8.325 7Q8.325 7 8.325 7H5Q5 7 5 7Q5 7 5 7V17Q5 17 5 17Q5 17 5 17ZM10.325 17H13.65Q13.65 17 13.65 17Q13.65 17 13.65 17V7Q13.65 7 13.65 7Q13.65 7 13.65 7H10.325Q10.325 7 10.325 7Q10.325 7 10.325 7V17Q10.325 17 10.325 17Q10.325 17 10.325 17ZM15.65 17H18.975Q18.975 17 18.975 17Q18.975 17 18.975 17V7Q18.975 7 18.975 7Q18.975 7 18.975 7H15.65Q15.65 7 15.65 7Q15.65 7 15.65 7V17Q15.65 17 15.65 17Q15.65 17 15.65 17Z"/>
    </Icon>
  );
});

IconMaterialViewColumnRounded.displayName = 'AmauiIconMaterialViewColumnRounded';

export default IconMaterialViewColumnRounded;
