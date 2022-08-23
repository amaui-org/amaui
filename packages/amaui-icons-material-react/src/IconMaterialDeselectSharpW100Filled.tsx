import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeselectSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectSharpW100Filled'
      short_name='Deselect'

      {...props}
    >
      <path d="M4.3 13V11H5V13ZM7 19.7V19H9V19.7ZM11 5V4.3H13V5ZM19 5V4.3Q19.3 4.3 19.5 4.5Q19.7 4.7 19.7 5ZM5 19.7Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19H5ZM4.3 17V15H5V17ZM11 19.7V19H13V19.7ZM19 13V11H19.7V13ZM19 8.75V6.75H19.7V8.75ZM15 5V4.3H17V5ZM9 15H14L9 10ZM15 19.7V19H17V19.7ZM15.7 12.875 15 12.175V9H11.825L11.125 8.3H15.7ZM4.3 9V7H5V9ZM19.85 20.85 14.7 15.7H8.3V9.3L3.15 4.15L3.65 3.65L20.35 20.35ZM9 4.3V5H7.825L7.125 4.3ZM19.7 15V16.875L19 16.175V15Z"/>
    </Icon>
  );
});

IconMaterialDeselectSharpW100Filled.displayName = 'AmauiIconMaterialDeselectSharpW100Filled';

export default IconMaterialDeselectSharpW100Filled;
