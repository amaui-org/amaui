import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResume = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Resume'

      short_name='Resume'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 816V336h80v480h-80Zm160 0 400-240-400-240v480Zm80-141V477l165 99-165 99Zm0-99Z"/>
    </Icon>
  );
});

IconMaterialResume.displayName = 'AmauiIconMaterialResume';

export default IconMaterialResume;
