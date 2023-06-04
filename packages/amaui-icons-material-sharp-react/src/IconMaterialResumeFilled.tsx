import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResumeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeFilled'

      short_name='Resume'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 816V336h80v480h-80Zm160 0 400-240-400-240v480Z"/>
    </Icon>
  );
});

IconMaterialResumeFilled.displayName = 'AmauiIconMaterialResumeFilled';

export default IconMaterialResumeFilled;
