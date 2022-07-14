import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineWeightSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightSharpW100'
      short_name='LineWeight'

      {...props}
    >
      <path d="M6.25 15.4V14.7H17.75V15.4ZM6.25 17.75V17.4H17.75V17.75ZM6.25 12.7V11.7H17.75V12.7ZM6.25 9.65V6.25H17.75V9.65Z"/>
    </Icon>
  );
});

export default IconMaterialLineWeightSharpW100;
