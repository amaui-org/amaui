import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardCircleFilled'

      short_name='ForwardCircle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 776q83 0 141.5-58.5T680 576h-60q0 58-41 99t-99 41q-58 0-99-41t-41-99q0-58 41-99t99-41h3l-49 50 42 43 120-120-120-120-43 43 44 44q-82 2-139.5 60T280 576q0 83 58.5 141.5T480 776Zm0 200q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialForwardCircleFilled.displayName = 'AmauiIconMaterialForwardCircleFilled';

export default IconMaterialForwardCircleFilled;
