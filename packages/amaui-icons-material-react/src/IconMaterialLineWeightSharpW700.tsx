import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineWeightSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightSharpW700'
      short_name='LineWeight'

      {...props}
    >
      <path d="M2.15 18.225V15.075H21.85V18.225ZM2.15 21.925V19.85H21.85V21.925ZM2.15 13.45V10.075H21.85V13.45ZM2.15 8.45V2.075H21.85V8.45Z"/>
    </Icon>
  )
});

export default IconMaterialLineWeightSharpW700;
