import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychiatryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychiatryFilled'

      short_name='Psychiatry'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 936V617q-64 0-123-24.5T213 523q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426 310q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760 336h80v80q0 64-24.5 123T746 643q-45 45-103.5 69T520 736v200h-80Z"/>
    </Icon>
  );
});

IconMaterialPsychiatryFilled.displayName = 'AmauiIconMaterialPsychiatryFilled';

export default IconMaterialPsychiatryFilled;
