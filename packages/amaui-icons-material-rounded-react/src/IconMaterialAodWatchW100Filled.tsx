import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodWatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodWatchW100Filled'

      short_name='AodWatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M390 556q-6.067 0-10.033-3.953-3.967-3.954-3.967-10Q376 536 379.967 532q3.966-4 10.033-4h180q6.067 0 10.033 3.953 3.967 3.954 3.967 10Q584 548 580.033 552q-3.966 4-10.033 4H390Zm40 88q-6.067 0-10.033-3.953-3.967-3.954-3.967-10Q416 624 419.967 620q3.966-4 10.033-4h100q6.067 0 10.033 3.953 3.967 3.954 3.967 10Q544 636 540.033 640q-3.966 4-10.033 4H430Zm14 238q-19.971 0-36.486-12Q391 858 386 838l-18-64q-51-27-83.5-80T252 576q0-65 32.5-118t83.5-80l18-64q5-20 21.514-32 16.515-12 36.486-12h72q19.971 0 36.485 12Q569 294 574 314l18 64q51 27 83.5 80T708 576q0 65-32.5 118T592 774l-18 64q-5 20-21.515 32-16.514 12-36.485 12h-72Zm36-106q83 0 141.5-58.5T680 576q0-83-58.5-141.5T480 376q-83 0-141.5 58.5T280 576q0 83 58.5 141.5T480 776Z"/>
    </Icon>
  );
});

IconMaterialAodWatchW100Filled.displayName = 'AmauiIconMaterialAodWatchW100Filled';

export default IconMaterialAodWatchW100Filled;
