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
      <path d="M479.965 910Q474 910 470 905.975T466 896V595q-54 0-103-20t-87-58q-38-38-57.5-87T199 327q0-12.325 8.337-20.662Q215.675 298 228 298q52.21 0 101.105 20.5T416 377q32 32 51.5 73.5T492 538q10-20 22.5-37.5T543 467q37.665-37.819 87.048-58.41Q679.432 388 733 388q12.325 0 20.662 8.338Q762 404.675 762 417q0 53.568-20.59 102.952Q720.819 569.335 683 607q-38 38-86.5 57.5T494 684v212q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM467 566q0-48-18.5-91.5T396 397q-34-34-77.5-52.5T227 326q0 48 18 92t52 78q34 34 78 52t92 18Zm27 90q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T564 487q-34 34-52 77.5T494 656Zm0 0Zm-27-90Z"/>
    </Icon>
  );
});

IconMaterialPsychiatryW100.displayName = 'AmauiIconMaterialPsychiatryW100';

export default IconMaterialPsychiatryW100;
