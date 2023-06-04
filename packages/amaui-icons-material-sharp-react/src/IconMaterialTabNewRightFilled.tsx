import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabNewRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightFilled'

      short_name='TabNewRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m760 1016-56-56 63-64H600v-80h167l-63-64 56-56 160 160-160 160Zm-640-80V216h720v414q-19-7-39.5-10.5T759 616q-100 0-169.5 70T520 856q0 21 3.5 41t10.5 39H120Zm320-160h80V616h160v-80H520V376h-80v160H280v80h160v160Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightFilled.displayName = 'AmauiIconMaterialTabNewRightFilled';

export default IconMaterialTabNewRightFilled;
