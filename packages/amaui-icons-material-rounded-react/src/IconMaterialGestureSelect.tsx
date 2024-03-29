import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGestureSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GestureSelect'

      short_name='GestureSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-560v80q-33 0-56.5-23.5T40-560h80Zm720 80v-80h80q0 33-23.5 56.5T840-480ZM40-640v-80h80v80H40Zm800 0v-80h80v80h-80ZM120-800H40q0-33 23.5-56.5T120-880v80Zm80 320v-80h80v80h-80Zm480 0v-80h80v80h-80Zm160-320v-80q33 0 56.5 23.5T920-800h-80Zm-640 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM473-40q-24 0-46-9t-39-26L184-280l33-34q14-14 34-19t40 0l69 20v-327q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640v433l-98-28 103 103q5 5 12.5 8.5T473-120h167q33 0 56.5-23.5T720-200v-160q0-17 11.5-28.5T760-400q17 0 28.5 11.5T800-360v160q0 66-47 113T640-40H473Zm7-280v-160q0-17 11.5-28.5T520-520q17 0 28.5 11.5T560-480v160h-80Zm120 0v-120q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440v120h-80Zm40 200H445h195Z"/>
    </Icon>
  );
});

IconMaterialGestureSelect.displayName = 'AmauiIconMaterialGestureSelect';

export default IconMaterialGestureSelect;
