import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewStreamRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamRoundedFilled'
      short_name='ViewStream'

      {...props}
    >
      <path d="M5 11Q4.175 11 3.587 10.412Q3 9.825 3 9V7Q3 6.175 3.587 5.588Q4.175 5 5 5H19Q19.825 5 20.413 5.588Q21 6.175 21 7V9Q21 9.825 20.413 10.412Q19.825 11 19 11ZM5 19Q4.175 19 3.587 18.413Q3 17.825 3 17V15Q3 14.175 3.587 13.587Q4.175 13 5 13H19Q19.825 13 20.413 13.587Q21 14.175 21 15V17Q21 17.825 20.413 18.413Q19.825 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialViewStreamRoundedFilled.displayName = 'AmauiIconMaterialViewStreamRoundedFilled';

export default IconMaterialViewStreamRoundedFilled;
