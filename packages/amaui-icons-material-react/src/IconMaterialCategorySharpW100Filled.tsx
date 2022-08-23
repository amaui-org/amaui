import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCategorySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySharpW100Filled'
      short_name='Category'

      {...props}
    >
      <path d="M8.3 10 12 3.9 15.7 10ZM17.5 21Q16.025 21 15.013 19.988Q14 18.975 14 17.5Q14 16.025 15.013 15.012Q16.025 14 17.5 14Q18.975 14 19.988 15.012Q21 16.025 21 17.5Q21 18.975 19.988 19.988Q18.975 21 17.5 21ZM4 20.5V14.5H10V20.5Z"/>
    </Icon>
  );
});

IconMaterialCategorySharpW100Filled.displayName = 'AmauiIconMaterialCategorySharpW100Filled';

export default IconMaterialCategorySharpW100Filled;
