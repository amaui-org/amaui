import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftW100'

      short_name='Shift'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M372 884V604H230l250-346 250 346H588v280H372Zm28-28h160V576h111L480 307 289 576h111v280Zm80-280Z"/>
    </Icon>
  );
});

IconMaterialShiftW100.displayName = 'AmauiIconMaterialShiftW100';

export default IconMaterialShiftW100;
