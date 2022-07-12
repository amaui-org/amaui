import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInputSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputSharpW700Filled'
      short_name='Input'

      {...props}
    >
      <path d="M11.575 17.5 9.375 15.275 11.075 13.575H1.15V10.425H11.075L9.375 8.725L11.575 6.5L17.075 12ZM1.15 21.225V15.575H4.3V18.075H19.7V5.925H4.3V8.425H1.15V2.775H22.85V21.225Z"/>
    </Icon>
  )
});

export default IconMaterialInputSharpW700Filled;
