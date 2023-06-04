import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychiatryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychiatryW100'

      short_name='Psychiatry'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 910V595q-54 0-103-20t-87-58q-38-38-57.5-87.599Q199 379.802 199 326v-28h28q52.686 0 102.027 20.59Q378.367 339.181 416 377q32 32 51.5 73.5T492 538q10-20 22.5-37.5T543 467q37.863-37.819 87.507-58.41Q680.15 388 734 388h28v28q0 53.882-20.622 103.555-20.623 49.673-58.5 87.559Q645 645 596.5 664.5T494 684v226h-28Zm1-344q0-48-18.5-91.5T396 397q-34-34-77.5-52.5T227 326q0 48 18 92t52 78q34 34 78 52t92 18Zm27 90q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T564 487q-34 34-52 77.5T494 656Zm0 0Zm-27-90Z"/>
    </Icon>
  );
});

IconMaterialPsychiatryW100.displayName = 'AmauiIconMaterialPsychiatryW100';

export default IconMaterialPsychiatryW100;
