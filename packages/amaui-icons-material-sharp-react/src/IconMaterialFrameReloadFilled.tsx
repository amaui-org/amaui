import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameReloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameReloadFilled'

      short_name='FrameReload'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 776q-73 0-127.5-45.5T284 616h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T382 476h58v60H280V376h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM120 936V696h80v160h160v80H120Zm480 0v-80h160V696h80v240H600ZM120 456V216h240v80H200v160h-80Zm640 0V296H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialFrameReloadFilled.displayName = 'AmauiIconMaterialFrameReloadFilled';

export default IconMaterialFrameReloadFilled;
