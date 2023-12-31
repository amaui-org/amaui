import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotAccessibleForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleForwardFilled'

      short_name='NotAccessibleForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-55-65-65h-46v-46L526-320h-86q-44 0-68-37.5t-6-78.5l14-30L55-791l57-57 736 736-57 57Zm-31-259L654-420h26q33 0 56.5 23.5T760-340v26ZM593-481 394-680h164q45 0 68.5 36.5T632-566l-39 85ZM320-80q-83 0-141.5-58.5T120-280q0-83 58.5-141.5T320-480v80q-50 0-85 35t-35 85q0 50 35 85t85 35q50 0 85-35t35-85h80q0 83-58.5 141.5T320-80Zm320-620q-33 0-56.5-23.5T560-780q0-33 23.5-56.5T640-860q33 0 56.5 23.5T720-780q0 33-23.5 56.5T640-700Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleForwardFilled.displayName = 'AmauiIconMaterialNotAccessibleForwardFilled';

export default IconMaterialNotAccessibleForwardFilled;
