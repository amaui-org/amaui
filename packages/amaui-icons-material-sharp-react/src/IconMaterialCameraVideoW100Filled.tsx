import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraVideoW100Filled'

      short_name='CameraVideo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M479.805 602Q436 602 405 570.805q-31-31.194-31-75Q374 452 405.195 421q31.194-31 75-31Q524 390 555 421.195q31 31.194 31 75Q586 540 554.805 571q-31.194 31-75 31Zm-219.84-160q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q249 390 241.5 397.465t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5ZM186 884v-28h125l33-133q-89-6-150.5-71T132 496q0-95.271 66.364-161.636Q264.729 268 360 268h240q95.271 0 161.636 66.364Q828 400.729 828 496q0 91-61.5 156T616 723l33 133h125v28H186Zm294-254q56 0 95-39t39-95q0-56-39-95t-95-39q-56 0-95 39t-39 95q0 56 39 95t95 39Z"/>
    </Icon>
  );
});

IconMaterialCameraVideoW100Filled.displayName = 'AmauiIconMaterialCameraVideoW100Filled';

export default IconMaterialCameraVideoW100Filled;
