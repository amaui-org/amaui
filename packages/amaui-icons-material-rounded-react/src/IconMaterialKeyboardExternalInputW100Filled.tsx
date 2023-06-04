import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardExternalInputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardExternalInputW100Filled'

      short_name='KeyboardExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 548v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56ZM212 428v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56ZM192 804q-26 0-43-17t-17-43V408q0-26 17-43t43-17h576q26 0 43 17t17 43v196q-18-12-38.5-20T748 571v-23h-56v19.13q-17 .87-33 4.37t-31 8.5v-32h-56v56h8q-19 13-34.5 29T517 668H360q-11 0-19.5 8.05T332 696q0 11 8.5 19.5T360 724h131q-5.385 15.78-7.692 32.39Q481 773 481 790v14H192Zm581 0H584q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h189l-79-80q-4-4-4-10t4.211-10.174Q698.07 672 704.035 672t9.965 4l92 93q9 9 9 21t-9 21l-92 93q-4 4-10 3.5t-10.174-4.5Q690 899.333 690 893.667q0-5.667 4-9.667l79-80Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInputW100Filled.displayName = 'AmauiIconMaterialKeyboardExternalInputW100Filled';

export default IconMaterialKeyboardExternalInputW100Filled;
