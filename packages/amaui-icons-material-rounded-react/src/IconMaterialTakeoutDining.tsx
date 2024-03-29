import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTakeoutDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDining'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 18h8.45l.475-7H7.3l.5 7Zm-.65-9h9.725l.075-1.25L14.15 5h-4.3l-2.8 2.75Zm-1.9 1.7L2.7 8.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l.9.9-.05-.6 3.475-3.475q.275-.275.637-.425.363-.15.763-.15h4.35q.4 0 .763.15.362.15.637.425L19.05 7.05l-.05.6.9-.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-2.55 2.55ZM7.8 20q-.8 0-1.375-.525T5.8 18.15l-.55-7.45h13.5l-.55 7.45q-.05.8-.625 1.325Q17 20 16.2 20ZM12 9Zm.025 2Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDining.displayName = 'AmauiIconMaterialTakeoutDining';

export default IconMaterialTakeoutDining;
