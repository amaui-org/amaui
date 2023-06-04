import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGamepadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GamepadW100Filled'

      short_name='Gamepad'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m459 421-38-38q-5-5-7-10.217-2-5.218-2-10.783V258q0-12.75 8.625-21.375T442 228h76q12.75 0 21.375 8.625T548 258v104q0 5.565-2 10.783Q544 378 539 383l-38 38q-9 9-21 9t-21-9Zm235 223q-5.565 0-10.783-2Q678 640 673 635l-38-38q-9-9-9-21t9-21l38-38q5-5 10.217-7 5.218-2 10.783-2h104q12.75 0 21.375 8.625T828 538v76q0 12.75-8.625 21.375T798 644H694Zm-532 0q-12.75 0-21.375-8.625T132 614v-76q0-12.75 8.625-21.375T162 508h104q5.565 0 10.783 2Q282 512 287 517l38 38q9 9 9 21t-9 21l-38 38q-5 5-10.217 7-5.218 2-10.783 2H162Zm280 280q-12.75 0-21.375-8.625T412 894V790q0-5.565 2-10.783Q416 774 421 769l38-38q9-9 21-9t21 9l38 38q5 5 7 10.217 2 5.218 2 10.783v104q0 12.75-8.625 21.375T518 924h-76Z"/>
    </Icon>
  );
});

IconMaterialGamepadW100Filled.displayName = 'AmauiIconMaterialGamepadW100Filled';

export default IconMaterialGamepadW100Filled;
