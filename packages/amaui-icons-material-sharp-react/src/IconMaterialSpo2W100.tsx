import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpo2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2W100'

      short_name='Spo2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M482 844V636h148v208H482Zm28-28h92V664h-92v152Zm180 144V842h122v-62H690v-28h150v118H718v62h122v28H690Zm-308-37q-109-7-179.5-85T132 648q0-82 66.5-182.5T400 244q91 81 151.5 155T641 536h-30q-28-56-80.5-119.5T400 282Q281 391 220.5 483T160 648q0 102 62 171t160 76v28Zm4-275Z"/>
    </Icon>
  );
});

IconMaterialSpo2W100.displayName = 'AmauiIconMaterialSpo2W100';

export default IconMaterialSpo2W100;
