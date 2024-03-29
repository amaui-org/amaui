import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDiningFilled'

      short_name='LocalDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.725 20.3q-.275-.275-.275-.7 0-.425.275-.7l9.55-9.55q-.45-1.05-.125-2.375T14.575 4.6q1.325-1.325 2.95-1.55 1.625-.225 2.65.8 1.025 1.025.8 2.65-.225 1.625-1.55 2.95-1.05 1.1-2.375 1.425-1.325.325-2.375-.125L13.425 12l6.9 6.9q.275.275.275.7 0 .425-.275.7-.3.3-.7.3-.4 0-.7-.3l-6.9-6.85-6.9 6.85q-.3.3-.7.3-.4 0-.7-.3Zm3.65-7.85-3-3Q3.25 8.325 3.062 6.825q-.187-1.5.563-2.825.25-.425.75-.475.5-.05.875.35l5.325 5.375Z"/>
    </Icon>
  );
});

IconMaterialLocalDiningFilled.displayName = 'AmauiIconMaterialLocalDiningFilled';

export default IconMaterialLocalDiningFilled;
