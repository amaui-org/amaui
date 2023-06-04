import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPillFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillFilled'

      short_name='Pill'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m668 707 106-107q32-32 49-73t17-86q0-94-65.5-159.5T615 216q-45 0-86 17t-73 49L349 388l319 319ZM345 936q45 0 86-17t73-49l107-106-319-319-106 107q-32 32-49 73t-17 86q0 94 65.5 159.5T345 936Z"/>
    </Icon>
  );
});

IconMaterialPillFilled.displayName = 'AmauiIconMaterialPillFilled';

export default IconMaterialPillFilled;
