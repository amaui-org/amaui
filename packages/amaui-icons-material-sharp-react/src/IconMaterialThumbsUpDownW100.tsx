import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownW100'

      short_name='ThumbsUpDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M.65 13.05V5.4L5.4.65l.55.55L5 5.35h6.35v1.875L8.8 13.05Zm.7-.7h7L10.65 7v-.95h-6.5L5.05 2l-3.7 3.7Zm17.25 11-.55-.55.95-4.15h-6.35v-1.875l2.55-5.825h8.15v7.65Zm.35-1.35 3.7-3.7v-6.65h-7L13.35 17v.95h6.5Zm-17.6-9.65V5.7 12.35Zm21.3 5.95V11.65v6.65Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownW100.displayName = 'AmauiIconMaterialThumbsUpDownW100';

export default IconMaterialThumbsUpDownW100;
