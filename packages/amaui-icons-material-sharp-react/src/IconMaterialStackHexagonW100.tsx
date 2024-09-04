import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackHexagonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackHexagonW100'

      short_name='StackHexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m568-417 132-75v-152l-132-75-132 75v152l132 75Zm156 189h10l3 27-543 69-64-495 98-9v28l-64 6 54 438 506-64Zm-416-80v-520h520v520H308Zm28-28h464v-464H336v464ZM218-164Zm350-404Z"/>
    </Icon>
  );
});

IconMaterialStackHexagonW100.displayName = 'AmauiIconMaterialStackHexagonW100';

export default IconMaterialStackHexagonW100;
