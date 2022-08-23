import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCategorySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySharpFilled'
      short_name='Category'

      {...props}
    >
      <path d="M6.5 11 12 2 17.5 11ZM17.5 22Q15.625 22 14.312 20.688Q13 19.375 13 17.5Q13 15.625 14.312 14.312Q15.625 13 17.5 13Q19.375 13 20.688 14.312Q22 15.625 22 17.5Q22 19.375 20.688 20.688Q19.375 22 17.5 22ZM3 21.5V13.5H11V21.5Z"/>
    </Icon>
  );
});

IconMaterialCategorySharpFilled.displayName = 'AmauiIconMaterialCategorySharpFilled';

export default IconMaterialCategorySharpFilled;
