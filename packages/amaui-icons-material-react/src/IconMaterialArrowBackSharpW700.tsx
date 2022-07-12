import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackSharpW700'
      short_name='ArrowBack'

      {...props}
    >
      <path d="M12 20.375 3.625 12 12 3.625 14.25 5.85 9.675 10.425H20.375V13.575H9.675L14.25 18.15Z"/>
    </Icon>
  )
});

export default IconMaterialArrowBackSharpW700;
