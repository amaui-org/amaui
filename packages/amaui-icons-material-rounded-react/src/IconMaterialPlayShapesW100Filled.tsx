import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayShapesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayShapesW100Filled'

      short_name='PlayShapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-550q-17.5 0-26.25-15t.25-30l110-189q9-15 26-15t26 15l110 189q9 15 .25 30T392-550H172Zm111 405q-57 0-96-39t-39-96q0-57 39-96t96-39q57 0 96 39t39 96q0 57-39 96t-96 39Zm294 0q-12.75 0-21.375-8.625T547-175v-210q0-12.75 8.625-21.375T577-415h210q12.75 0 21.375 8.625T817-385v210q0 12.75-8.625 21.375T787-145H577Zm86-545L556-796q-4-3.667-4-9.333 0-5.667 3.929-9.667 3.928-4 10-4Q572-819 576-815l106 106 106-106q3.911-4 9.956-4Q804-819 808-815q4 4 4 9.667 0 5.666-4 9.333L701-690l107 107q4 3.667 4 9.333 0 5.667-3.929 9.667-3.928 4-10 4Q792-560 788-564L682-670 576-564q-3.911 4-9.956 4Q560-560 556-564q-4-4-4-9.667 0-5.666 4-9.333l107-107Z"/>
    </Icon>
  );
});

IconMaterialPlayShapesW100Filled.displayName = 'AmauiIconMaterialPlayShapesW100Filled';

export default IconMaterialPlayShapesW100Filled;
