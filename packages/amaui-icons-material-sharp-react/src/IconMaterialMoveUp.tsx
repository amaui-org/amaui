import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveUp'

      short_name='MoveUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20.275q-2.925 0-4.962-2.038Q1 16.2 1 13.275q0-2.7 1.775-4.675 1.775-1.975 4.4-2.275L5.6 4.675l1.4-1.4 4 4-4 4L5.6 9.85l1.475-1.475q-1.75.35-2.913 1.7Q3 11.425 3 13.275q0 2.075 1.463 3.537Q5.925 18.275 8 18.275h3v2Zm5-9v-7h9v7Zm0 9v-7h9v7Zm2-2h5v-3h-5Z"/>
    </Icon>
  );
});

IconMaterialMoveUp.displayName = 'AmauiIconMaterialMoveUp';

export default IconMaterialMoveUp;
