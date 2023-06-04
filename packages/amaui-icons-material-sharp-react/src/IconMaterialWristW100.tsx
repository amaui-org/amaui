import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWristW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WristW100'

      short_name='Wrist'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M450 910 264 724H76v-28h200l173 174 23-25-65-129h397v28H453l53 105-56 61ZM76 456v-28h168l80-80h440v28H336l-80 80H76Zm500 165v-28h308v28H576Zm0-122v-28h268v28H576ZM76 623Z"/>
    </Icon>
  );
});

IconMaterialWristW100.displayName = 'AmauiIconMaterialWristW100';

export default IconMaterialWristW100;
