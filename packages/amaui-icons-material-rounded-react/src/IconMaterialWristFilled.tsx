import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWristFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WristFilled'

      short_name='Wrist'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M244 776H80q-17 0-28.5-11.5T40 736V416q0-17 11.5-28.5T80 376h144l44-45q17-17 39-26t46-9h407q17 0 28.5 11.5T800 336q0 17-11.5 28.5T760 376H560v60h280q17 0 28.5 11.5T880 476q0 17-11.5 28.5T840 516H560v60h320q17 0 28.5 11.5T920 616q0 17-11.5 28.5T880 656H560v60h240q17 0 28.5 11.5T840 756q0 17-11.5 28.5T800 796H485l6 12q17 35 10.5 72.5T468 945q-12 11-28 11t-27-11L244 776Z"/>
    </Icon>
  );
});

IconMaterialWristFilled.displayName = 'AmauiIconMaterialWristFilled';

export default IconMaterialWristFilled;
