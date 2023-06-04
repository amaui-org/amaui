import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBodySystemW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodySystemW100Filled'

      short_name='BodySystem'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m350 790 83-382-132 54v87h-28V443l170-72q14-6 25.5-7.5t22.5.5q11 2 19.5 8.5T526 390l24 38q42 67 78.5 97t85.5 35v28q-66-8-107.5-44T527 445l-36 127 83 98v120h-28V685L439 572l-61 218h-28Zm189-473q-27 0-45.5-18.5T475 253q0-27 18.5-45.5T539 189q27 0 45.5 18.5T603 253q0 27-18.5 45.5T539 317Zm-59 607q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-103 53.5-186T325 264l12 25q-79 39-128 115.5T160 576q0 134 93 227t227 93q134 0 227-93t93-227h28q0 72-27.5 135.5T726 822q-47 47-110.5 74.5T480 924Z"/>
    </Icon>
  );
});

IconMaterialBodySystemW100Filled.displayName = 'AmauiIconMaterialBodySystemW100Filled';

export default IconMaterialBodySystemW100Filled;
