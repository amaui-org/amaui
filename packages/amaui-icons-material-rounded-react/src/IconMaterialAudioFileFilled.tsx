import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioFileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioFileFilled'

      short_name='AudioFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.75 19q.95 0 1.6-.65.65-.65.65-1.6V13h2q.425 0 .713-.288Q16 12.425 16 12t-.287-.713Q15.425 11 15 11h-2q-.425 0-.712.287Q12 11.575 12 12v2.875q-.275-.2-.587-.288-.313-.087-.663-.087-.95 0-1.6.65-.65.65-.65 1.6 0 .95.65 1.6.65.65 1.6.65ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm8-13h4l-5-5v4q0 .425.288.712Q13.575 9 14 9Z"/>
    </Icon>
  );
});

IconMaterialAudioFileFilled.displayName = 'AmauiIconMaterialAudioFileFilled';

export default IconMaterialAudioFileFilled;
