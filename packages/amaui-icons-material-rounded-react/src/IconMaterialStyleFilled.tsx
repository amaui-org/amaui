import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStyleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleFilled'

      short_name='Style'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.975 19.8-.85-.35q-.775-.325-1.037-1.125-.263-.8.087-1.575l1.8-3.9Zm4 2.2q-.825 0-1.413-.587-.587-.588-.587-1.413v-6l2.65 7.35q.075.175.15.338.075.162.2.312Zm5.15-.1q-.8.3-1.55-.075t-1.05-1.175l-4.45-12.2q-.3-.8.05-1.563.35-.762 1.15-1.037l7.55-2.75q.8-.3 1.55.075t1.05 1.175l4.45 12.2q.3.8-.05 1.563-.35.762-1.15 1.037ZM10.975 10q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q11.4 8 10.975 8t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialStyleFilled.displayName = 'AmauiIconMaterialStyleFilled';

export default IconMaterialStyleFilled;
