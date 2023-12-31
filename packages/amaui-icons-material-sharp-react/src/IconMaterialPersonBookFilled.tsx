import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonBookFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonBookFilled'

      short_name='PersonBook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q-69 0-129 21t-111 59v80h480v-80q-51-38-111-59t-129-21ZM160-80v-800h640v800H160Zm320-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/>
    </Icon>
  );
});

IconMaterialPersonBookFilled.displayName = 'AmauiIconMaterialPersonBookFilled';

export default IconMaterialPersonBookFilled;
