import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCategory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Category'

      short_name='Category'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 11 12 2l5.5 9Zm11 11q-1.875 0-3.188-1.312Q13 19.375 13 17.5q0-1.875 1.312-3.188Q15.625 13 17.5 13q1.875 0 3.188 1.312Q22 15.625 22 17.5q0 1.875-1.312 3.188Q19.375 22 17.5 22ZM3 21.5v-8h8v8ZM17.5 20q1.05 0 1.775-.725Q20 18.55 20 17.5q0-1.05-.725-1.775Q18.55 15 17.5 15q-1.05 0-1.775.725Q15 16.45 15 17.5q0 1.05.725 1.775Q16.45 20 17.5 20ZM5 19.5h4v-4H5ZM10.05 9h3.9L12 5.85ZM12 9Zm-3 6.5Zm8.5 2Z"/>
    </Icon>
  );
});

IconMaterialCategory.displayName = 'AmauiIconMaterialCategory';

export default IconMaterialCategory;
