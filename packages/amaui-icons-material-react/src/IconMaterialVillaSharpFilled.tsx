import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaSharpFilled'
      short_name='Villa'

      {...props}
    >
      <path d="M9 21V12H17Q17 11.175 17.587 10.587Q18.175 10 19 10Q19.825 10 20.413 10.587Q21 11.175 21 12V21H16V16H14V21ZM3 21V8L16 3V10H7V21Z"/>
    </Icon>
  )
});

export default IconMaterialVillaSharpFilled;
