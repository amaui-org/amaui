import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkManageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkManageW100'

      short_name='NetworkManage'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M395 851q14-14 31-23t37-11q0 14 2 28t6 28q4 14 8.5 27t11.5 25l-11 11-85-85ZM254 710l-28-28q51-51 116.5-78.5T480 576q29 0 58 5t56 14q-11 6-22.5 13.5T550 624q-17-4-34.5-6t-35.5-2q-64 0-122.5 24.5T254 710ZM84 540l-28-28q85-85 194.5-130.5T480 336q120 0 229.5 45.5T904 512l-28 28q-79-79-181.5-121.5T480 376q-112 0-214.5 42.5T84 540Zm635 128 2 28q26 5 42 13.5t30 26.5l26-12 16 22-22 18q8 24 8 46t-8 46l22 18-16 22-26-12q-14 17-30 26t-42 14l-2 28h-28l-2-28q-26-5-42-14t-30-26l-26 12-16-22 22-18q-8-24-8-46t8-46l-22-18 16-22 26 12q14-18 30-26.5t42-13.5l2-28h28Zm-14 54q-36 0-62 26t-26 62q0 36 26 62t62 26q36 0 62-26t26-62q0-36-26-62t-62-26Z"/>
    </Icon>
  );
});

IconMaterialNetworkManageW100.displayName = 'AmauiIconMaterialNetworkManageW100';

export default IconMaterialNetworkManageW100;
