import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackHexagonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackHexagonFilled'

      short_name='StackHexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m580-420 140-80v-160l-140-80-140 80v160l140 80ZM148-75 74-672l126-14v486h532l5 53-589 72Zm132-205v-600h600v600H280Z"/>
    </Icon>
  );
});

IconMaterialStackHexagonFilled.displayName = 'AmauiIconMaterialStackHexagonFilled';

export default IconMaterialStackHexagonFilled;
