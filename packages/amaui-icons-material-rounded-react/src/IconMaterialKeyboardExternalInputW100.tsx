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
      <path d="M160 776V376v400Zm32 28q-26 0-43-17t-17-43V408q0-26 17-43t43-17h576q26 0 43 17t17 43v196q-7-5-13.5-8.5T800 588V408q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v336q0 12 10 22t22 10h289v28H192Zm168-80h131q5-15 11.5-29t14.5-27H360q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T360 724ZM212 548v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h8q11-8 23-13.5t25-10.5v-32h-56Zm120 0v19q3 0 6-.5t6-.5q11 0 22 1.5t22 3.5v-23h-56ZM212 428v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm81 376H584q-6 0-10-4t-4-10q0-6 4-10t10-4h189l-79-80q-4-4-4-10t4-10q4-4 10-4t10 4l92 93q9 9 9 21t-9 21l-92 93q-4 4-10 3.5t-10-4.5q-4-4-4-9.5t4-9.5l79-80Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInputW100.displayName = 'AmauiIconMaterialKeyboardExternalInputW100';

export default IconMaterialKeyboardExternalInputW100;
