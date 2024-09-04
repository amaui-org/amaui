import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronBackwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronBackwardW100'

      short_name='ChevronBackward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-276 356-480l204-204 20 20-184 184 184 184-20 20Z"/>
    </Icon>
  );
});

IconMaterialChevronBackwardW100.displayName = 'AmauiIconMaterialChevronBackwardW100';

export default IconMaterialChevronBackwardW100;
