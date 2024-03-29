import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardPreviousLanguage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardPreviousLanguage'

      short_name='KeyboardPreviousLanguage'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976q-33 0-56.5-23.5T80 896V496q0-33 23.5-56.5T160 416h640q33 0 56.5 23.5T880 496v400q0 33-23.5 56.5T800 976H160Zm0-80h640V496H160v400Zm200-40h240q17 0 28.5-11.5T640 816q0-17-11.5-28.5T600 776H360q-17 0-28.5 11.5T320 816q0 17 11.5 28.5T360 856ZM200 736h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200 616h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160 896V496v400Zm215-640h25q17 0 28.5 11.5T440 296q0 17-11.5 28.5T400 336H280q-17 0-28.5-11.5T240 296V176q0-17 11.5-28.5T280 136q17 0 28.5 11.5T320 176v21q32-29 73-45t87-16q80 0 143 47.5T709 306q4 13-7 21.5t-27 8.5q-16 0-30-6t-20-20q-20-42-58.5-68T480 216q-30 0-57 10.5T375 256Z"/>
    </Icon>
  );
});

IconMaterialKeyboardPreviousLanguage.displayName = 'AmauiIconMaterialKeyboardPreviousLanguage';

export default IconMaterialKeyboardPreviousLanguage;
