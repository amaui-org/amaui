import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndArrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowW100'

      short_name='LineEndArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.55 16.175V12.35H3.4v-.7h9.15V7.825L19.125 12Zm.7-1.275L17.8 12l-4.55-2.9Zm0-2.9Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowW100.displayName = 'AmauiIconMaterialLineEndArrowW100';

export default IconMaterialLineEndArrowW100;
