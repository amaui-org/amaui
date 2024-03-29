import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpFilled'

      short_name='VolumeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 20.3q-.5.2-.925-.125-.425-.325-.425-.9 0-.275.163-.487.162-.213.412-.313 2-.8 3.213-2.55Q19 14.175 19 11.975t-1.212-3.95q-1.213-1.75-3.213-2.55-.275-.1-.425-.325-.15-.225-.15-.5 0-.55.425-.875.425-.325.925-.125 2.55 1.025 4.1 3.275Q21 9.175 21 11.975t-1.55 5.05q-1.55 2.25-4.1 3.275ZM4 15q-.425 0-.712-.288Q3 14.425 3 14v-4q0-.425.288-.713Q3.575 9 4 9h3l3.3-3.3q.475-.475 1.087-.213.613.263.613.938v11.15q0 .675-.613.937-.612.263-1.087-.212L7 15Zm10 1V7.95q1.125.525 1.812 1.625.688 1.1.688 2.425 0 1.325-.688 2.4Q15.125 15.475 14 16Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpFilled.displayName = 'AmauiIconMaterialVolumeUpFilled';

export default IconMaterialVolumeUpFilled;
