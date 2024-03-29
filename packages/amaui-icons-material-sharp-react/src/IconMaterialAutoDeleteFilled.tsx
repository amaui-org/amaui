import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteFilled'

      short_name='AutoDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 3h6v1h5v2h-1v4.3q-.425-.125-.988-.213Q17.45 10 17 10q-.45 0-1.012.075-.563.075-.988.2V8h-2v3.25q-.55.4-1.1.987-.55.588-.9 1.163V8H9v9h1q0 .975.35 2.087.35 1.113.9 1.913H5V6H4V4h5Zm8 9q2.075 0 3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12Zm-.5 2v3.2l2.15 2.15.7-.7-1.85-1.85V14Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteFilled.displayName = 'AmauiIconMaterialAutoDeleteFilled';

export default IconMaterialAutoDeleteFilled;
