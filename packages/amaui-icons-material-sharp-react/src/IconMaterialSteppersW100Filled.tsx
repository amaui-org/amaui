import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSteppersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SteppersW100Filled'

      short_name='Steppers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240.235-400Q207-400 183.5-423.265q-23.5-23.264-23.5-56.5Q160-513 183.265-536.5q23.264-23.5 56.5-23.5Q273-560 296.5-536.735q23.5 23.264 23.5 56.5Q320-447 296.735-423.5q-23.264 23.5-56.5 23.5Zm-.305-28Q262-428 277-442.93t15-37Q292-502 277.07-517t-37-15Q218-532 203-517.07t-15 37Q188-458 202.93-443t37 15Zm240.305 28Q447-400 423.5-423.265q-23.5-23.264-23.5-56.5Q400-513 423.265-536.5q23.264-23.5 56.5-23.5Q513-560 536.5-536.735q23.5 23.264 23.5 56.5Q560-447 536.735-423.5q-23.264 23.5-56.5 23.5Zm-.305-28Q502-428 517-442.93t15-37Q532-502 517.07-517t-37-15Q458-532 443-517.07t-15 37Q428-458 442.93-443t37 15Zm240.305 28Q687-400 663.5-423.265q-23.5-23.264-23.5-56.5Q640-513 663.265-536.5q23.264-23.5 56.5-23.5Q753-560 776.5-536.735q23.5 23.264 23.5 56.5Q800-447 776.735-423.5q-23.264 23.5-56.5 23.5Z"/>
    </Icon>
  );
});

IconMaterialSteppersW100Filled.displayName = 'AmauiIconMaterialSteppersW100Filled';

export default IconMaterialSteppersW100Filled;
