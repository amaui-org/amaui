import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResumeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeW100Filled'

      short_name='Resume'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M304 744V408h28v336h-28Zm128 0 281-168-281-168v336Z"/>
    </Icon>
  );
});

IconMaterialResumeW100Filled.displayName = 'AmauiIconMaterialResumeW100Filled';

export default IconMaterialResumeW100Filled;
