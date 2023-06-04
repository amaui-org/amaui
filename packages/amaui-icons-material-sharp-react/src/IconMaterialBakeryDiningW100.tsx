import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBakeryDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningW100'

      short_name='BakeryDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 17.35Zm7.775.2 1.7-1.85-2.05-3.85-1.85 4.55Zm-5.4-.9h2.35l2.975-7.325-4.525-1.8Zm-7.15 0H9.6l-.8-9.125L4.35 9.3Zm-3.05.9 2.2-1.15-1.8-4.55-2.1 3.95Zm6.1-.9h3.4l.9-10.3H9.4ZM4.05 18.4l-2.375-2.45L4.25 11l-.825-2.1L8.75 6.825l-.1-1.175h6.7l-.1 1.15 5.375 2.175-.825 1.975 2.55 4.85-2.4 2.625-2.05-1.075H6.1Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningW100.displayName = 'AmauiIconMaterialBakeryDiningW100';

export default IconMaterialBakeryDiningW100;
