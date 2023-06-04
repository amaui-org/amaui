import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAzmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmW100'

      short_name='Azm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M502.956 840.044Q489 854 470.5 846.344 452 838.688 452 819V636q0-14-9-23t-23-9H237q-19.688 0-27.344-18.5-7.656-18.5 6.3-32.456L442.92 326.08Q451 318 462.278 313T486 308h202q24.75 0 42.375 17.625T748 368v202q0 12.444-5 23.722t-13.08 19.358L502.956 840.044ZM614 502v187l106-106V368q0-14-9-23t-23-9H473L367 442h187q25.5 0 42.75 17.25T614 502ZM480 636v187l106-106V502q0-14-9-23t-23-9H339L233 576h187q25.5 0 42.75 17.25T480 636Z"/>
    </Icon>
  );
});

IconMaterialAzmW100.displayName = 'AmauiIconMaterialAzmW100';

export default IconMaterialAzmW100;
