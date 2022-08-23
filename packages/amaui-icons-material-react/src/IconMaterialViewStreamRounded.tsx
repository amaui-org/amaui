import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewStreamRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamRounded'
      short_name='ViewStream'

      {...props}
    >
      <path d="M19 17V13Q19 13 19 13Q19 13 19 13H5Q5 13 5 13Q5 13 5 13V17Q5 17 5 17Q5 17 5 17H19Q19 17 19 17Q19 17 19 17ZM19 11V7Q19 7 19 7Q19 7 19 7H5Q5 7 5 7Q5 7 5 7V11Q5 11 5 11Q5 11 5 11H19Q19 11 19 11Q19 11 19 11ZM5 19Q4.175 19 3.587 18.413Q3 17.825 3 17V7Q3 6.175 3.587 5.588Q4.175 5 5 5H19Q19.825 5 20.413 5.588Q21 6.175 21 7V17Q21 17.825 20.413 18.413Q19.825 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialViewStreamRounded.displayName = 'AmauiIconMaterialViewStreamRounded';

export default IconMaterialViewStreamRounded;
