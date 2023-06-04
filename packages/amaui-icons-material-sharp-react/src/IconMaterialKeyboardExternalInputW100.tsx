import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardExternalInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardExternalInputW100'

      short_name='KeyboardExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 776V376v400Zm-28 28V348h696v256q-7-5-13.5-8.5T800 588V376H160v400h321v28H132Zm200-136v56h159q5-15 11.5-29t14.5-27H332ZM212 548v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h8q11-8 23-13.5t25-10.5v-32h-56Zm120 0v19q3-.5 5.85-.75 2.85-.25 6.15-.25 11 0 22 1.5t22 3.5v-23h-56ZM212 428v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm12 485-19-19 88-90H570v-28h203l-88-90 19-19 123 123-123 123Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInputW100.displayName = 'AmauiIconMaterialKeyboardExternalInputW100';

export default IconMaterialKeyboardExternalInputW100;
