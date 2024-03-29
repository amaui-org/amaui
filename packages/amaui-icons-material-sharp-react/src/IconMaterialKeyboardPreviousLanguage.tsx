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
      <path d="M80 976V416h800v560H80Zm80-80h640V496H160v400Zm160-40h320v-80H320v80ZM200 736h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200 616h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160 896V496v400Zm80-560V136h80v61q32-29 73-45t87-16q88 0 155 56.5T716 336h-82q-14-53-56.5-86.5T480 216q-30 0-57 10.5T375 256h65v80H240Z"/>
    </Icon>
  );
});

IconMaterialKeyboardPreviousLanguage.displayName = 'AmauiIconMaterialKeyboardPreviousLanguage';

export default IconMaterialKeyboardPreviousLanguage;
