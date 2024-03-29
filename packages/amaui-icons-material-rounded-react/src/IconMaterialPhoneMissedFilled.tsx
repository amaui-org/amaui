import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneMissedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedFilled'

      short_name='PhoneMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.425 20.4-2.3-2.25q-.275-.275-.275-.7 0-.425.275-.7 2.125-2.3 4.95-3.525T12.025 12q3.125 0 5.95 1.238 2.825 1.237 4.95 3.512.275.275.275.7 0 .425-.275.7l-2.3 2.25q-.275.275-.637.3-.363.025-.663-.2l-2.9-2.2q-.2-.15-.3-.35-.1-.2-.1-.45v-2.85q-.975-.325-1.975-.488-1-.162-2.025-.162T10 14.162q-1 .163-1.975.488v2.85q0 .25-.1.45t-.3.35l-2.9 2.2q-.3.225-.663.2-.362-.025-.637-.3ZM12 10.975q-.2 0-.375-.063-.175-.062-.325-.212L7.05 6.45v1.6q0 .425-.287.712-.288.288-.713.288t-.712-.288q-.288-.287-.288-.712v-4q0-.425.288-.713.287-.287.712-.287h4q.425 0 .713.287.287.288.287.713t-.287.712q-.288.288-.713.288h-1.6l3.525 3.525 4.95-4.95q.3-.3.713-.3.412 0 .712.3t.3.712q0 .413-.3.713L12.7 10.7q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedFilled.displayName = 'AmauiIconMaterialPhoneMissedFilled';

export default IconMaterialPhoneMissedFilled;
