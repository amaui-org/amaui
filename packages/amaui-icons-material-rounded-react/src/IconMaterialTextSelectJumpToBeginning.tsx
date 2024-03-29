import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectJumpToBeginning = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectJumpToBeginning'

      short_name='TextSelectJumpToBeginning'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M532 708 428 604q-12-12-12-28t12-28l104-104q11-11 27.5-11.5T588 444q11 11 11 28t-11 28l-35 36h247q17 0 28.5 11.5T840 576q0 17-11.5 28.5T800 616H553l36 36q11 11 11 27.5T588 708q-11 11-28 11t-28-11ZM160 936q-17 0-28.5-11.5T120 896V256q0-17 11.5-28.5T160 216q17 0 28.5 11.5T200 256v640q0 17-11.5 28.5T160 936Zm120 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 0v-80q33 0 56.5 23.5T840 296h-80Zm0 640v-80h80q0 33-23.5 56.5T760 936Z"/>
    </Icon>
  );
});

IconMaterialTextSelectJumpToBeginning.displayName = 'AmauiIconMaterialTextSelectJumpToBeginning';

export default IconMaterialTextSelectJumpToBeginning;
