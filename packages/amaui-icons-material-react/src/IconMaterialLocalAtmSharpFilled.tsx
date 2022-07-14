import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalAtmSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmSharpFilled'
      short_name='LocalAtm'

      {...props}
    >
      <path d="M11 17H13V16H15V11H11V10H15V8H13V7H11V8H9V13H13V14H9V16H11ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

export default IconMaterialLocalAtmSharpFilled;
