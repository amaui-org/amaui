import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCategorySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySharp'
      short_name='Category'

      {...props}
    >
      <path d="M6.5 11 12 2 17.5 11ZM17.5 22Q15.625 22 14.312 20.688Q13 19.375 13 17.5Q13 15.625 14.312 14.312Q15.625 13 17.5 13Q19.375 13 20.688 14.312Q22 15.625 22 17.5Q22 19.375 20.688 20.688Q19.375 22 17.5 22ZM3 21.5V13.5H11V21.5ZM17.5 20Q18.55 20 19.275 19.275Q20 18.55 20 17.5Q20 16.45 19.275 15.725Q18.55 15 17.5 15Q16.45 15 15.725 15.725Q15 16.45 15 17.5Q15 18.55 15.725 19.275Q16.45 20 17.5 20ZM5 19.5H9V15.5H5ZM10.05 9H13.95L12 5.85ZM12 9ZM9 15.5ZM17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Z"/>
    </Icon>
  );
});

IconMaterialCategorySharp.displayName = 'AmauiIconMaterialCategorySharp';

export default IconMaterialCategorySharp;
