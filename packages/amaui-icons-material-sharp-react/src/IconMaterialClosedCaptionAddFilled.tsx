import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionAddFilled'

      short_name='ClosedCaptionAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h160q9-7 19-12.5t21-10.5v-57h-60v20h-80v-120h80v20h60v-80H520v240Zm-280 0h200v-80h-60v20h-80v-120h80v20h60v-80H240v240Zm-40 200q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v324q-49-11-97.5 4.5T659-341q-36 36-50.5 83.5T604-160H200Zm560 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionAddFilled.displayName = 'AmauiIconMaterialClosedCaptionAddFilled';

export default IconMaterialClosedCaptionAddFilled;
