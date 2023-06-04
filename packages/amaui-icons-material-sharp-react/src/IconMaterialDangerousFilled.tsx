import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDangerousFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousFilled'

      short_name='Dangerous'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 21 3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21Zm.9-4.75L12 13.4l2.85 2.85 1.4-1.4L13.4 12l2.85-2.85-1.4-1.4L12 10.6 9.15 7.75l-1.4 1.4L10.6 12l-2.85 2.85Z"/>
    </Icon>
  );
});

IconMaterialDangerousFilled.displayName = 'AmauiIconMaterialDangerousFilled';

export default IconMaterialDangerousFilled;
