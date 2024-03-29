import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionModeFilled'

      short_name='MotionMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 4.85v14.3q-.425-.425-.8-.9-.375-.475-.7-.975V6.725q.325-.5.7-.975.375-.475.8-.9Zm4-2.4v19.1q-.525-.175-1.025-.387-.5-.213-.975-.488V3.325q.475-.275.975-.488.5-.212 1.025-.387Zm7 18.725V2.825Q18.65 4 20.325 6.45 22 8.9 22 12q0 3.1-1.675 5.55Q18.65 20 16 21.175ZM12 22q-.25 0-.5-.012-.25-.013-.5-.038V2.05q.25-.025.5-.038Q11.75 2 12 2q.5 0 1 .05t1 .15v19.6q-.5.1-1 .15-.5.05-1 .05Z"/>
    </Icon>
  );
});

IconMaterialMotionModeFilled.displayName = 'AmauiIconMaterialMotionModeFilled';

export default IconMaterialMotionModeFilled;
