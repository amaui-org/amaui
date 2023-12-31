import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureOffW100'

      short_name='PictureInPictureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M616-456h114q13 0 21.5-8.5T760-486v-164q0-13-8.5-21.5T730-680H486q-13 0-21.5 8.5T456-650v34l28 28v-64h248v168H588l28 28Zm207 207-23-23v-416q0-14-9-23t-23-9H352l-28-28h444q26 0 43 17t17 43v416q0 6-1.5 12t-3.5 11ZM420-480Zm156-16ZM842-78 708-212H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l28 28h-48q-12 0-22 10t-10 22v416q0 12 10 22t22 10h488L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureOffW100.displayName = 'AmauiIconMaterialPictureInPictureOffW100';

export default IconMaterialPictureInPictureOffW100;
