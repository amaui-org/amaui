import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUploadProgressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUploadProgressW100Filled'

      short_name='ArrowUploadProgress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-134q-66-7-122-37t-97.5-76.5Q179-294 155.5-354T132-480q0-134 88.5-233T441-826v28q-120 17-200.5 107T160-480q0 121 80 211t200 107v28Zm26-182v-274L336-460l-20-20 164-164 164 164-20 20-130-130v274h-28Zm54 182v-28q43-6 82.5-21.5T676-226l22 20q-40 29-85 46.5T520-134Zm158-598q-35-26-74.5-43T521-798v-28q48 7 92.5 25t84.5 47l-20 22Zm76 468-20-20q26-34 42-73.5t22-82.5h28q-6 48-24.5 93T754-264Zm44-256q-6-43-22-82.5T734-676l22-22q27 40 44.5 85t25.5 93h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowUploadProgressW100Filled.displayName = 'AmauiIconMaterialArrowUploadProgressW100Filled';

export default IconMaterialArrowUploadProgressW100Filled;
