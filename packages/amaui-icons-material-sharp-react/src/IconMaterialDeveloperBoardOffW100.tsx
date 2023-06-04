import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffW100'

      short_name='DeveloperBoardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.525 4.3H19V8h1.4v.7H19v2.725h1.4v.7H19v2.725h1.4v.7h-1.6l-.5-.5V5H8.225Zm3.625 3.95L10.9 8h.25Zm1.825 1.5-.425-.425V8h2.75v1.75ZM15.3 12.5l-1.25-1.25h1.25Zm-3.65.15Zm1.325-2.9ZM7.3 16v-2.75h3.85V16ZM4.675 4.325 5.35 5H4.3v14h14v-1.05l.675.675V19.7H3.6V4.325ZM12.55 12.2l2.75 2.75V16h-2.75ZM8.35 8l2.8 2.8v.95H7.3V8Zm13.125 14.125L2.425 3.075l.5-.5 19.05 19.05Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffW100.displayName = 'AmauiIconMaterialDeveloperBoardOffW100';

export default IconMaterialDeveloperBoardOffW100;
