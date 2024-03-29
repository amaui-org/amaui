import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwordRose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordRose'

      short_name='SwordRose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m644-484-56-57 212-212v-47h-47L541-588l-57-56 224-224q6-6 13.5-9t15.5-3h103q17 0 28.5 11.5T880-840v103q0 8-3 15.5t-9 13.5L644-484ZM142-92l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 48-48 57 56-48 48 47 47 48-48 56 57-48 48 5 4q23 23 23 57t-23 57l-28 28-88-88L198-92q-12 12-28 12t-28-12Zm696-301q5-23 0-46t-15-45q-17 16-30 35.5T775-406q-5 23 .5 45.5T790-316q17-16 30-35t18-42ZM207-626q19 19 43.5 25t47.5-2l-19-19q-18-18-43-24.5t-48 1.5l19 19Zm73-180-79 78q36-3 71.5 9t63.5 40l19 19q8-23 3-48t-25-44l-53-54ZM810-93 357-544q-49 30-107 23.5T150-569L40-680l240-239 110 110q43 43 48.5 101T414-601l289 289q-8-26-10-54t3-56q11-51 43-92t76-67q14-8 29.5-5t24.5 16q29 41 43.5 91t3.5 101q-11 51-42.5 91T797-218l69 69q11 11 11.5 27.5T866-93q-11 11-28 11t-28-11ZM310-650Z"/>
    </Icon>
  );
});

IconMaterialSwordRose.displayName = 'AmauiIconMaterialSwordRose';

export default IconMaterialSwordRose;
