import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeMuteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteFilled'

      short_name='VolumeMute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 15q-.425 0-.713-.288Q7 14.425 7 14v-4q0-.425.287-.713Q7.575 9 8 9h3l3.3-3.3q.475-.475 1.087-.213.613.263.613.938v11.15q0 .675-.613.937-.612.263-1.087-.212L11 15Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteFilled.displayName = 'AmauiIconMaterialVolumeMuteFilled';

export default IconMaterialVolumeMuteFilled;
