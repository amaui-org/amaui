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
      <path d="M212 548v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56ZM212 428v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm12 485-19-19 88-90H570v-28h203l-88-90 19-19 123 123-123 123ZM132 804V348h696v256q-18-12-38.5-20T748 571v-23h-56v19.13q-17 .87-33 4.37t-31 8.5v-32h-56v56h8q-19 13-34.5 29T517 668H332v56h159q-5.385 15.78-7.692 32.39Q481 773 481 790v14H132Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInputW100Filled.displayName = 'AmauiIconMaterialKeyboardExternalInputW100Filled';

export default IconMaterialKeyboardExternalInputW100Filled;
