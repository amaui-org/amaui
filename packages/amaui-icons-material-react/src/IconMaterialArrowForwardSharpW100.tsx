import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardSharpW100'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M12 19 11.5 18.5 17.65 12.35H5V11.65H17.65L11.5 5.5L12 5L19 12Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardSharpW100.displayName = 'AmauiIconMaterialArrowForwardSharpW100';

export default IconMaterialArrowForwardSharpW100;
