import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledW100'

      short_name='CommentsDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5.6-5.6H3.3V4.3L2.25 3.25l.5-.5L21.8 21.8Zm-.6-4.4L18.8 16H20V4H6.8l-.7-.7h14.6ZM4 16h11l-2.65-2.65h-5.7v-.7h5l-2.3-2.3h-2.7v-.7h2L4 5Zm12.15-2.65-.7-.7h1.9v.7Zm-3-3-.7-.7h4.9v.7Zm-3-3-.7-.7h7.9v.7ZM9.5 10.5Zm3.9.1Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledW100.displayName = 'AmauiIconMaterialCommentsDisabledW100';

export default IconMaterialCommentsDisabledW100;
