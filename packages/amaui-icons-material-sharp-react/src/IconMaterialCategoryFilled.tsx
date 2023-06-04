import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCategoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryFilled'

      short_name='Category'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 11 12 2l5.5 9Zm11 11q-1.875 0-3.188-1.312Q13 19.375 13 17.5q0-1.875 1.312-3.188Q15.625 13 17.5 13q1.875 0 3.188 1.312Q22 15.625 22 17.5q0 1.875-1.312 3.188Q19.375 22 17.5 22ZM3 21.5v-8h8v8Z"/>
    </Icon>
  );
});

IconMaterialCategoryFilled.displayName = 'AmauiIconMaterialCategoryFilled';

export default IconMaterialCategoryFilled;
