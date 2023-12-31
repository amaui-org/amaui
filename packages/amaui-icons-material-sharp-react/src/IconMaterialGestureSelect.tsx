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
      <path d="M40-480v-80h80v80H40Zm800 0v-80h80v80h-80ZM40-640v-80h80v80H40Zm800 0v-80h80v80h-80ZM40-800v-80h80v80H40Zm160 320v-80h80v80h-80Zm480 0v-80h80v80h-80Zm160-320v-80h80v80h-80Zm-640 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM473-40q-24 0-46-9t-39-26L184-280l64-65 112 32v-367h80v473l-98-28 103 103q6 6 13 9t15 3h167q33 0 56.5-23.5T720-200v-200h80v200q0 66-47 113T640-40H473Zm7-280v-200h80v200h-80Zm120 0v-120h80v120h-80Zm40 200H445h195Z"/>
    </Icon>
  );
});

IconMaterialGestureSelect.displayName = 'AmauiIconMaterialGestureSelect';

export default IconMaterialGestureSelect;
