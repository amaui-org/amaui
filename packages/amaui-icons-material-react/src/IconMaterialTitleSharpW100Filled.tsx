import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTitleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleSharpW100Filled'
      short_name='Title'

      {...props}
    >
      <path d="M11.65 18.85V5.85H6.15V5.15H17.85V5.85H12.35V18.85Z"/>
    </Icon>
  );
});

IconMaterialTitleSharpW100Filled.displayName = 'AmauiIconMaterialTitleSharpW100Filled';

export default IconMaterialTitleSharpW100Filled;
