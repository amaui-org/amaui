import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceOverOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceOverOffW100Filled'

      short_name='VoiceOverOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.325 9.3-2.95-3h.25q1.125 0 1.913.788.787.787.787 1.912V9.3Zm-9.4 9.4v-1.3q0-.65.325-1.075.325-.425.925-.725 1.2-.6 2.65-.95t2.8-.35q1.175 0 2.275.237 1.1.238 1.875.513l-3.45-3.45q-.175.05-.337.075-.163.025-.363.025-1.125 0-1.912-.788-.788-.787-.788-1.912 0-.2.025-.375t.075-.325l-4.1-4.1.5-.5 17.5 17.5-.5.5-4.1-4.1v1.1Zm17.75-4-.5-.5q1.05-1.075 1.625-2.388.575-1.312.575-2.812 0-1.5-.575-2.812-.575-1.313-1.625-2.388l.5-.5q1.1 1.1 1.75 2.575.65 1.475.65 3.125t-.65 3.125q-.65 1.475-1.75 2.575Zm-3.35-3.35-.5-.5q.375-.375.588-.825.212-.45.212-1.025t-.212-1.025q-.213-.45-.588-.825l.5-.5q.45.45.725 1.037.275.588.275 1.313t-.275 1.312q-.275.588-.725 1.038Z"/>
    </Icon>
  );
});

IconMaterialVoiceOverOffW100Filled.displayName = 'AmauiIconMaterialVoiceOverOffW100Filled';

export default IconMaterialVoiceOverOffW100Filled;
