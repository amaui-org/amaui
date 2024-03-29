import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStyle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Style'

      short_name='Style'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 12.85v6.95l-2.7-1.1ZM8.9 22H5.975v-8Zm2.325.6L5.375 6.55l11.35-4.15 5.85 16.05Zm-.25-12.6q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q11.4 8 10.975 8t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm1.45 10 7.55-2.75L15.525 5l-7.55 2.75ZM7.975 7.75 15.525 5Z"/>
    </Icon>
  );
});

IconMaterialStyle.displayName = 'AmauiIconMaterialStyle';

export default IconMaterialStyle;
