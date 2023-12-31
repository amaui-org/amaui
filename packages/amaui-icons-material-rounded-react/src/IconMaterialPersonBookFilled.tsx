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
      <path d="M480-320q-69 0-129 21t-111 59v80h480v-80q-51-38-111-59t-129-21ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm240-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/>
    </Icon>
  );
});

IconMaterialPersonBookFilled.displayName = 'AmauiIconMaterialPersonBookFilled';

export default IconMaterialPersonBookFilled;
