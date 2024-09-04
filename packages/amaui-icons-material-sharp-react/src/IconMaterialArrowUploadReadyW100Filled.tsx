import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUploadReadyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUploadReadyW100Filled'

      short_name='ArrowUploadReady'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M204-262q-27-40-44.5-85T134-440h28q6 43 22 82.5t42 73.5l-22 22Zm-70-258q6-48 24.5-93t47.5-83l20 20q-26 34-42 73.5T162-520h-28Zm304 386q-48-7-92.5-25.5T262-206l20-22q35 26 74 43t82 23v28ZM284-734l-22-20q40-29 85-46.5t93-25.5v28q-43 6-82.5 21.5T284-734Zm234 600v-28q43-6 83.5-21.5T676-226l22 20q-40 29-85.5 46.5T518-134Zm160-598q-35-26-75-43t-83-23v-28q48 7 93 25t85 47l-20 22Zm76 468-20-20q26-34 42-73.5t22-82.5h28q-6 48-24.5 93T754-264Zm44-256q-6-43-22-82.5T734-676l22-22q27 40 44.5 85t25.5 93h-28ZM466-316v-274L336-460l-20-20 164-164 164 164-20 20-130-130v274h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowUploadReadyW100Filled.displayName = 'AmauiIconMaterialArrowUploadReadyW100Filled';

export default IconMaterialArrowUploadReadyW100Filled;
