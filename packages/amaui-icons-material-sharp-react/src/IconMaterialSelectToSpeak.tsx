import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectToSpeak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectToSpeak'

      short_name='SelectToSpeak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 925v-82q90-26 145-100t55-168q0-94-55-168T560 307v-82q124 28 202 125.5T840 575q0 127-78 224.5T560 925Zm-80-29L280 696H120V456h160l200-200v640Zm80-160V414q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560 736Zm-160-34V450l-86 86H200v80h114l86 86ZM40 376V136h240v80H120v160H40Zm640 640v-80h160V776h80v240H680ZM300 576Z"/>
    </Icon>
  );
});

IconMaterialSelectToSpeak.displayName = 'AmauiIconMaterialSelectToSpeak';

export default IconMaterialSelectToSpeak;
