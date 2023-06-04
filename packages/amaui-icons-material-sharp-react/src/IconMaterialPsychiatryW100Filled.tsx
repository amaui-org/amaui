import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychiatryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychiatryW100Filled'

      short_name='Psychiatry'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 910V595q-54 0-103-20t-87-58q-38-38-57.5-87.599Q199 379.802 199 326v-28h28q52.686 0 102.027 20.59Q378.367 339.181 416 377q32 32 51.5 73.5T492 538q10-20 22.5-37.5T543 467q37.863-37.819 87.507-58.41Q680.15 388 734 388h28v28q0 53.882-20.622 103.555-20.623 49.673-58.5 87.559Q645 645 596.5 664.5T494 684v226h-28Z"/>
    </Icon>
  );
});

IconMaterialPsychiatryW100Filled.displayName = 'AmauiIconMaterialPsychiatryW100Filled';

export default IconMaterialPsychiatryW100Filled;
