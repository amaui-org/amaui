import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveBackWord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveBackWord'

      short_name='TextSelectMoveBackWord'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280 296v-80h80v80h-80Zm0 640v-80h80v80h-80Zm-28-228L148 604q-12-12-12-28t12-28l104-104q11-11 27.5-11.5T308 444q11 11 11 28t-11 28l-35 36h207q17 0 28.5 11.5T520 576q0 17-11.5 28.5T480 616H273l36 36q11 11 11 27.5T308 708q-11 11-28 11t-28-11Zm428 148h80V296h-80v560Zm0 80q-33 0-56.5-23.5T600 856V296q0-33 23.5-56.5T680 216h80q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936h-80Zm0-80h80-80Zm-480 80q-33 0-56.5-23.5T120 856h80v80Zm-80-640q0-33 23.5-56.5T200 216v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveBackWord.displayName = 'AmauiIconMaterialTextSelectMoveBackWord';

export default IconMaterialTextSelectMoveBackWord;
