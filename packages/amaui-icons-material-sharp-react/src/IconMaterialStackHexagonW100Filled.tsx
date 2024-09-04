import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackHexagonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackHexagonW100Filled'

      short_name='StackHexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m568-417 132-75v-152l-132-75-132 75v152l132 75ZM194-132l-64-495 98-9v408h506l3 27-543 69Zm114-176v-520h520v520H308Z"/>
    </Icon>
  );
});

IconMaterialStackHexagonW100Filled.displayName = 'AmauiIconMaterialStackHexagonW100Filled';

export default IconMaterialStackHexagonW100Filled;
