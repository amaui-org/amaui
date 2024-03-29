import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopLeft'

      short_name='ArrowTopLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m313 496 115 115q11 11 11 27.5T428 667q-12 12-28.5 12T371 667L188 484q-12-12-12-28t12-28l184-184q11-11 27.5-11.5T428 244q11 11 11 28t-11 28L313 416h367q33 0 56.5 23.5T760 496v360q0 17-11.5 28.5T720 896q-17 0-28.5-11.5T680 856V496H313Z"/>
    </Icon>
  );
});

IconMaterialArrowTopLeft.displayName = 'AmauiIconMaterialArrowTopLeft';

export default IconMaterialArrowTopLeft;
