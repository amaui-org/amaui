import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoSharpFilled'
      short_name='Volcano'

      {...props}
    >
      <path d="M2 22 6 13H9L11 8H18L22 22ZM13 5V1H15V5ZM17.525 6.875 16.125 5.475 18.95 2.65 20.375 4.05ZM10.475 6.875 7.65 4.05 9.05 2.625 11.875 5.475Z"/>
    </Icon>
  );
});

export default IconMaterialVolcanoSharpFilled;
