import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsFlatHeadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadSharpW100'
      short_name='ToolsFlatHead'

      {...props}
    >
      <path d="M9.125 19.7V19h5.75v.7Zm0-1.7-.8-5.625 1.7-6.775h3.95l1.7 6.775-.8 5.625Zm.6-.7h4.55l.65-4.65H9.05Zm-.575-5.35h5.7l-1.4-5.65h-2.9Zm5.125 5.35h-4.55 4.55Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHeadSharpW100.displayName = 'AmauiIconMaterialToolsFlatHeadSharpW100';

export default IconMaterialToolsFlatHeadSharpW100;
