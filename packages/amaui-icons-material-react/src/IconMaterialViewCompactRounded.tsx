import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactRounded'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18ZM20 11V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V11Q4 11 4 11Q4 11 4 11H20Q20 11 20 11Q20 11 20 11ZM10 18H20Q20 18 20 18Q20 18 20 18V13Q20 13 20 13Q20 13 20 13H10Q10 13 10 13Q10 13 10 13V18Q10 18 10 18Q10 18 10 18ZM4 18H8Q8 18 8 18Q8 18 8 18V13Q8 13 8 13Q8 13 8 13H4Q4 13 4 13Q4 13 4 13V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialViewCompactRounded.displayName = 'AmauiIconMaterialViewCompactRounded';

export default IconMaterialViewCompactRounded;
